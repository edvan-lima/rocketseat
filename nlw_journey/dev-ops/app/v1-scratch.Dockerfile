# Use a imagem base do Node.js
FROM node:18-alpine AS base

# Instalar dependências apenas quando necessário
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Instalar dependências com base no gerenciador de pacotes preferido
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Recompilar o código-fonte apenas quando necessário
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desabilitar a telemetria do Next.js durante a construção, se necessário
# ENV NEXT_TELEMETRY_DISABLED 1

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Criar usuário e grupo e definir permissões durante a construção
RUN addgroup -S nextjs && adduser -S -G nextjs nextjs
RUN chown -R nextjs:nextjs /app

# Criar a imagem de produção a partir de scratch
FROM scratch AS runner
WORKDIR /app

# Copiar os arquivos necessários do estágio builder
COPY --from=builder /app/public /app/public
COPY --from=builder /app/.next/standalone /app
COPY --from=builder /app/.next/static /app/.next/static

# Copiar binários do Node.js e bibliotecas
COPY --from=base /usr/local/bin/node /usr/local/bin/
COPY --from=base /lib/ld-musl-x86_64.so.1 /lib/
COPY --from=base /usr/lib/libgcc_s.so.1 /usr/lib/
COPY --from=base /usr/lib/libstdc++.so.6 /usr/lib/

# Copiar configuração de usuário e grupo
COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder /etc/group /etc/group

# Definir usuário
USER nextjs

# Definir variáveis de ambiente
ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

# Executar o servidor
CMD ["node", "server.js"]

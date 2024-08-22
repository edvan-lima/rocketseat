import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDateNow() {
  const formattedDate = Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "America/Sao_Paulo",
  }).format(new Date())

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
}

export function formatTime(date: Date | string | number) {
  const dataNoFusoHorarioBR = new Date(date)
  dataNoFusoHorarioBR.setHours(dataNoFusoHorarioBR.getHours() + 3)
  const opcoesFormato = { timeZone: "America/Sao_Paulo" }

  return new Intl.DateTimeFormat("pt-BR", {
    hour: "numeric",
    minute: "numeric",
    timeZone: "America/Sao_Paulo",
  }).format(new Date(dataNoFusoHorarioBR))
}

export function getWeekday(date: Date | string | number) {
  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    month: "numeric",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
}

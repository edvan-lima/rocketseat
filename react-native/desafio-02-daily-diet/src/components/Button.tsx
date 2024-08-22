import { type VariantProps, cva } from "class-variance-authority"
import { Text, TouchableOpacity } from "react-native"

import { cn } from "../lib/utils"

const buttonVariants = cva(
  "flex flex-row items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary",
        success: "bg-zinc-200",
        cancel: "bg-zinc-200",
        ghost: "bg-slate-700",
        link: "text-primary underline-offset-4"
      },
      size: {
        default: "h-14 px-4",
        sm: "h-8 px-2",
        lg: "h-12 px-8"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

const buttonTextVariants = cva("text-center font-medium", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      success: "text-secondary-foreground",
      cancel: "text-secondary-foreground",
      ghost: "text-primary-foreground",
      link: "text-primary-foreground underline"
    },
    size: {
      default: "text-sm",
      sm: "text-sm",
      lg: "text-xl"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  label: string
  labelClasses?: string
}
function Button({
  label,
  labelClasses,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <Text
        className={cn(
          buttonTextVariants({ variant, size, className: labelClasses })
        )}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export { Button, buttonVariants, buttonTextVariants }

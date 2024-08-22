import { type VariantProps, cva } from "class-variance-authority"
import { Text, TouchableOpacity, View } from "react-native"

import { cn } from "@/lib/utils"
import { FontAwesome } from "@expo/vector-icons"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"

const buttonVariants = cva("rounded-xl justify-center items-center flex-row", {
  variants: {
    variant: {
      default: "bg-red-500",
      outline: "bg-white border-2 border-red-500 border-solid",
      secondary: "bg-secondary",
      destructive: "bg-destructive",
      ghost: "bg-slate-700",
      link: "text-primary underline-offset-4",
    },
    size: {
      default: "h-16 px-8",
      sm: "h-8 px-2",
      lg: "h-12 px-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

const buttonTextVariants = cva("text-center font-bold tracking-wider", {
  variants: {
    variant: {
      default: "text-white",
      outline: "text-red-500",
      secondary: "text-secondary-foreground",
      destructive: "text-destructive-foreground",
      ghost: "text-primary-foreground",
      link: "text-primary-foreground underline",
    },
    size: {
      default: "text-xl",
      sm: "text-sm",
      lg: "text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  label: string
  labelClasses?: string
  isLoading?: boolean
}
function Button({
  label,
  labelClasses,
  className,
  variant,
  size,
  isLoading,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {isLoading ? (
        <View className="mr-2 animate-spin items-center">
          <FontAwesome name="spinner" size={hp(1.8)} color="white" />
        </View>
      ) : (
        <Text
          className={cn(
            buttonTextVariants({ variant, size, className: labelClasses })
          )}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export { Button, buttonVariants, buttonTextVariants }

import { type VariantProps, cva } from "class-variance-authority"
import { Text, TouchableOpacity, View } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { cn } from "@/lib/utils"
import { FontAwesome } from "@expo/vector-icons"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"

const buttonVariants = cva("rounded-md justify-center items-center flex-row", {
  variants: {
    variant: {
      default: "bg-primary",
      outline: "bg-white border-2 border-red-500 border-solid",
      secondary: "bg-destructive-foreground",
      destructive: "bg-destructive",
      ghost: "bg-slate-700",
      link: "text-primary underline-offset-4",
    },
    size: {
      default: "h-14 px-8",
      sm: "h-8 px-2",
      lg: "h-16 px-8",
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
      default: "text-neutral-200",
      outline: "text-red-500",
      secondary: "text-neutral-200",
      destructive: "text-destructive-foreground",
      ghost: "text-primary-foreground",
      link: "text-primary-foreground underline",
    },
    size: {
      default: "text-base",
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
  icon?: keyof typeof MaterialIcons
}
function Button({
  label,
  labelClasses,
  className,
  variant,
  size,
  isLoading,
  icon,
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

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-2 pl-6",
        sm: "h-9 rounded-full px-3",
        lg: "h-14 px-3 pl-8 text-base",
        icon: "h-10 w-10 !p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const childrenArray = React.Children.toArray(children);
    const iconChild = childrenArray.find(
      (child) => React.isValidElement(child) && ((child.type as any).displayName?.includes('Icon') || (child.type as any).name?.includes('Icon'))
    );
    const textChildren = childrenArray.filter(child => child !== iconChild);

    if (iconChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {textChildren}
          <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
            {React.cloneElement(iconChild as React.ReactElement, { className: 'w-4 h-4' })}
          </div>
        </Comp>
      );
    }

    // Default button rendering without the animated icon
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), 'px-6', size === 'lg' && 'px-8', size === 'icon' && '!px-0')}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

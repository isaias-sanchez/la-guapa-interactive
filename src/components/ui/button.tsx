import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // La Guapa custom variants
        hero: "bg-gradient-to-r from-primary to-[hsl(340,82%,65%)] text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 font-semibold tracking-wide",
        floating: "bg-secondary text-secondary-foreground shadow-lg hover:shadow-xl hover:scale-110 rounded-full",
        whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg hover:shadow-xl hover:scale-105 rounded-full",
        rappi: "bg-[#FF441F] text-white hover:bg-[#E63900] shadow-lg hover:shadow-xl hover:scale-105 rounded-full",
        menuTab: "bg-transparent text-foreground/70 hover:text-foreground hover:bg-muted rounded-full border border-transparent",
        menuTabActive: "bg-gradient-to-r from-primary to-[hsl(340,82%,65%)] text-primary-foreground rounded-full shadow-md font-semibold",
        cream: "bg-[hsl(34,52%,92%)] text-[hsl(150,34%,14%)] hover:bg-[hsl(34,40%,80%)] font-semibold shadow-md hover:shadow-lg hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
        fab: "h-14 w-14 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

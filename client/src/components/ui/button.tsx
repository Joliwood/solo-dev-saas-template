/* eslint-disable react/require-default-props */
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '#utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
      disabled: {
        true: 'opacity-50',
      },
      /** Exemple of additional prop that doesn't exist on the original component */
      color: {
        red: 'bg-red-500 text-red-50',
        green: 'bg-green-500 text-green-50',
        blue: 'bg-blue-500 text-blue-50',
        yellow: 'bg-yellow-500 text-yellow-50',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      disabled: false,
      color: 'red',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  disabled?: boolean;
  color?: typeof buttonVariants['arguments']['color'];
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    asChild = false,
    className,
    color,
    size,
    variant,
    disabled,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({
          className,
          color,
          size,
          variant,
          disabled,
        }))}
        ref={ref}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        disabled={disabled}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

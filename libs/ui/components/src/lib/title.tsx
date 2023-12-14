import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@jsfront/utils';

const headingVariants = cva('scroll-m-20 font-semibold tracking-tight', {
  variants: {
    size: {
      small: 'text-xl',
      md: 'text-2xl',
      lg: 'border-b pb-2 text-3xl first:mt-0',
      xl: 'font-extrabold text-4xl lg:text-5xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

interface HeadingProps extends VariantProps<typeof headingVariants> {
  children: React.ReactNode;
  className?: string;
}

export function Heading({ children, className, size }: HeadingProps) {
  return (
    <h1 className={cn(headingVariants({ size, className }))}>{children}</h1>
  );
}

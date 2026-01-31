import React from "react";
import { cn } from "@/lib/utils";

export type TypographyVariant = "h1" | "h2" | "h3" | "p" | "small";

export interface TypographyProps {
  /**
   * The variant of typography to render
   * - h1: Main page title (44px desktop → 32px mobile, font-weight 700)
   * - h2: Section subtitle (28px desktop → 20px mobile, font-weight 600)
   * - h3: Sub-heading (22px desktop → 18px mobile, font-weight 600)
   * - p: Paragraph text (16px desktop → 15px mobile, font-weight 400)
   * - small: Helper text (14px desktop → 13px mobile, font-weight 400)
   */
  variant?: TypographyVariant;
  /**
   * Content to display
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Text alignment
   */
  align?: "left" | "center" | "right" | "justify";
  /**
   * Text color - can be CSS color, Tailwind class, or custom
   */
  color?: string;
  /**
   * Whether to apply text-balance for optimal readability
   */
  balance?: boolean;
  /**
   * HTML element to render as (overrides default for variant)
   */
  as?: React.ElementType;
  /**
   * Additional HTML attributes
   */
  [key: string]: any;
}

const variantStyles: Record<
  TypographyVariant,
  { element: React.ElementType; className: string }
> = {
  h1: {
    element: "h1",
    className: "h1",
  },
  h2: {
    element: "h2",
    className: "h2",
  },
  h3: {
    element: "h3",
    className: "h3",
  },
  p: {
    element: "p",
    className: "body",
  },
  small: {
    element: "small",
    className: "small",
  },
};

const alignmentClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

/**
 * Typography Component
 *
 * A flexible, accessible typography component that supports responsive font sizes
 * and follows modern UI/UX best practices for educational websites.
 *
 * @example
 * // Main page title
 * <Typography variant="h1">Welcome to JKKN Allied Health Sciences</Typography>
 *
 * @example
 * // Section subtitle with custom styling
 * <Typography variant="h2" align="center" className="text-primary">
 *   Our Programs
 * </Typography>
 *
 * @example
 * // Paragraph with balanced text
 * <Typography variant="p" balance>
 *   This is a long paragraph that will be balanced for optimal readability.
 * </Typography>
 *
 * @example
 * // Custom element with typography styling
 * <Typography variant="h1" as="div" className="gradient-text">
 *   Custom Styled Heading
 * </Typography>
 */
export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = "p",
      children,
      className,
      align,
      color,
      balance = false,
      as,
      ...props
    },
    ref
  ) => {
    const { element: defaultElement, className: variantClassName } =
      variantStyles[variant as TypographyVariant];
    const Component = as || defaultElement;

    const combinedClassName = cn(
      variantClassName,
      align && alignmentClasses[align as keyof typeof alignmentClasses],
      balance && "text-balance",
      color && (color.startsWith("#") || color.startsWith("rgb")
        ? ""
        : color),
      className
    );

    const style = color && (color.startsWith("#") || color.startsWith("rgb"))
      ? { color }
      : undefined;

    return (
      <Component
        ref={ref}
        className={combinedClassName}
        style={style}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;

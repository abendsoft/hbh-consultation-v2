import { ElementType, ReactNode, useRef } from "react";
import { ripple as rippleEffect } from "../../../utils/functions/ripple";

interface ButtonProps {
  as?: ElementType;
  to?: string;
  children?: ReactNode;
  icon?: React.ReactNode | string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?:
    | "info"
    | "muted"
    | "danger"
    | "primary"
    | "success"
    | "warning"
    | "default"
    | "secondary";
  rounded?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full" | "none";
  variant?: "solid" | "outline" | "default";
  shadow?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  ripple?: boolean;
  rippleColor?: string;
  after?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  as: Component = "button",
  children,
  size = "md",
  color = "primary",
  rounded = "lg",
  shadow = false,
  fullWidth = false,
  disabled = false,
  variant = "solid",
  ripple = true,
  rippleColor,
  onClick,
  icon,
  after = false,
  ...rest
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const btnSize =
    size === "xs"
      ? "hbh-extension-px-3 hbh-extension-py-2"
      : size === "sm"
        ? "hbh-extension-px-3 hbh-extension-py-2"
        : size === "md"
          ? "hbh-extension-px-5 hbh-extension-py-2.5"
          : size === "lg"
            ? "hbh-extension-px-5 hbh-extension-py-3"
            : size === "xl"
              ? "hbh-extension-px-6 hbh-extension-py-3.5"
              : null;

  const rippleClr = rippleColor
    ? rippleColor
    : color === "secondary"
      ? "hbh-extension-bg-secondary-200"
      : color === "danger"
        ? "hbh-extension-bg-destructive"
        : color === "muted"
          ? "hbh-extension-bg-muted"
          : color === "success"
            ? "hbh-extension-bg-success"
            : color === "warning"
              ? "hbh-extension-bg-warning"
              : "hbh-extension-bg-primary/75";

  const btnColor =
    color === "primary" && variant === "default"
      ? "hbh-extension-bg-muted/20 hbh-extension-text-foreground"
      : color === "primary" && variant === "solid"
        ? "hbh-extension-bg-primary hbh-extension-text-white"
        : color === "primary" && variant === "outline"
          ? "hbh-extension-border hbh-extension-border-primary hbh-extension-text-primary hover:hbh-extension-bg-primary hover:hbh-extension-text-white"
          : color === "secondary" && variant === "solid"
            ? "hbh-extension-bg-secondary hbh-extension-text-black"
            : color === "secondary" && variant === "outline"
              ? "hbh-extension-border hbh-extension-border-secondary hbh-extension-text-secondary hover:hbh-extension-bg-secondary hover:hbh-extension-text-white"
              : color === "danger" && variant === "solid"
                ? "hbh-extension-bg-destructive hbh-extension-text-white"
                : color === "danger" && variant === "outline"
                  ? "hbh-extension-border hbh-extension-border-destructive hbh-extension-text-destructive hover:hbh-extension-bg-destructive hover:hbh-extension-text-white"
                  : color === "muted" && variant === "solid"
                    ? "hbh-extension-bg-muted hbh-extension-text-muted-foreground"
                    : color === "muted" && variant === "outline"
                      ? "hbh-extension-border hbh-extension-border-muted-foreground hbh-extension-text-muted-foreground hover:hbh-extension-bg-muted hover:hbh-extension-text-muted-foreground"
                      : color === "success" && variant === "solid"
                        ? "hbh-extension-bg-success hbh-extension-text-white"
                        : color === "success" && variant === "outline"
                          ? "hbh-extension-border hbh-extension-border-success hbh-extension-text-success hover:hbh-extension-bg-success hover:hbh-extension-text-white"
                          : color === "warning" && variant === "solid"
                            ? "hbh-extension-bg-warning hbh-extension-text-white"
                            : color === "warning" && variant === "outline"
                              ? "hbh-extension-border hbh-extension-border-warning hbh-extension-text-warning hover:hbh-extension-bg-warning hover:hbh-extension-text-white"
                              : color === "info" && variant === "solid"
                                ? "hbh-extension-bg-info hbh-extension-text-white"
                                : color === "info" && variant === "outline"
                                  ? "hbh-extension-border hbh-extension-border-info hbh-extension-text-info hover:hbh-extension-bg-info hover:hbh-extension-text-white"
                                  : color === "default" && variant === "solid"
                                    ? "hbh-extension-bg-muted hbh-extension-text-foreground"
                                    : color === "default" &&
                                        variant === "outline"
                                      ? "hbh-extension-border hbh-extension-border-foreground hbh-extension-text-foreground hover:hbh-extension-bg-muted hover:hbh-extension-text-foreground"
                                      : null;

  const btnRounded =
    rounded === "xs"
      ? "hbh-extension-rounded"
      : rounded === "sm"
        ? "hbh-extension-rounded-sm"
        : rounded === "md"
          ? "hbh-extension-rounded-md"
          : rounded === "lg"
            ? "hbh-extension-rounded-lg"
            : rounded === "xl"
              ? "hbh-extension-rounded-xl"
              : rounded === "2xl"
                ? "hbh-extension-rounded-2xl"
                : rounded === "3xl"
                  ? "hbh-extension-rounded-3xl"
                  : rounded === "none"
                    ? "hbh-extension-rounded-none"
                    : rounded === "full"
                      ? "hbh-extension-rounded-full"
                      : null;

  const btnShadow = shadow
    ? "hbh-extension-shadow-md hbh-extension-shadow-primary-foreground"
    : "";

  const width = fullWidth ? "hbh-extension-w-full" : "";

  const btnDisabled = disabled
    ? "hbh-extension-cursor-not-allowed disabled:hbh-extension-opacity-50 disabled:hbh-extension-shadow-none"
    : "";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      if (ripple) {
        rippleEffect(e, btnRef, rippleClr);
      }
      onClick();
    }
  };

  return (
    <Component
      id="bt"
      type="button"
      ref={btnRef}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
      className={`hbh-extension-relative hbh-extension-min-w-max hbh-extension-items-center hbh-extension-gap-1 hbh-extension-overflow-hidden hbh-extension-text-center hbh-extension-font-medium hbh-extension-tracking-wider hbh-extension-transition-all hbh-extension-duration-200 hbh-extension-ease-out hover:hbh-extension-bg-opacity-85 ${btnRounded} ${btnShadow} ${btnSize} ${btnColor} ${width} ${btnDisabled}`}
    >
      {!after && icon && <span>{icon}</span>}
      {children}
      {after && icon && <span>{icon}</span>}
    </Component>
  );
};

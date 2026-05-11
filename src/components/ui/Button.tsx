import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "widePrimary" | "primary" | "secondary" | "tag";

type ButtonProps = {
    children: ReactNode;
    variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
    children,
    variant = "primary",
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={clsx(
                
                "font-sans font-semibold transition-all duration-200 cursor-pointer",

                (variant === "primary" || variant === "secondary") && "py-2 px-6 min-w-[128px] rounded-lg text-sm",
                variant === "widePrimary" &&
                "py-2 px-12 min-w-[334px] max-w-[400px] rounded-lg text-sm",
                variant === "tag" && "py-1 px-4 rounded-full text-sm",

                {
                    // BRED PRIMÄR
                    "bg-secondary text-background border border-secondary hover:bg-secondary-hover hover:border-secondary-hover ":
                        variant === "widePrimary",

                    // PRIMÄR
                    "bg-primary text-background border border-background hover:bg-primary-hover":
                        variant === "primary",

                    // SEKUNDÄR
                    "bg-background text-muted border border-muted hover:text-primary-hover hover:border-primary-hover":
                        variant === "secondary",

                    // TAG
                    "bg-background text-secondary border border-secondary hover:bg-secondary-hover hover:text-background hover:border-secondary-hover active:bg-secondary":
                        variant === "tag",
                },

                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
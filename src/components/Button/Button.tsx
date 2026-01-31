import React from 'react';
import { cn } from '@/utils/cn';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual variant of the button */
    variant?: ButtonVariant;
    /** Size of the button */
    size?: ButtonSize;
    /** Make button take full width of container */
    fullWidth?: boolean;
    /** Show loading spinner and disable interactions */
    isLoading?: boolean;
    /** Icon to display on the left side */
    leftIcon?: React.ReactNode;
    /** Icon to display on the right side */
    rightIcon?: React.ReactNode;
    /** Render as icon-only button (no padding, same width/height) */
    iconOnly?: boolean;
    /** Additional CSS class */
    className?: string;
}

/**
 * Button component with multiple variants and sizes.
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="danger" isLoading>Deleting...</Button>
 * <Button variant="ghost" leftIcon={<Icon />}>With Icon</Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            fullWidth = false,
            isLoading = false,
            leftIcon,
            rightIcon,
            iconOnly = false,
            className,
            disabled,
            children,
            ...props
        },
        ref
    ) => {
        const classNames = cn(
            styles.button,
            styles[variant],
            styles[size],
            fullWidth && styles.fullWidth,
            iconOnly && styles.iconOnly,
            isLoading && styles.loading,
            className
        );

        return (
            <button
                ref={ref}
                className={classNames}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && (
                    <svg
                        className={styles.spinner}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            opacity="0.25"
                        />
                        <path
                            d="M12 2C6.477 2 2 6.477 2 12"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                    </svg>
                )}

                {leftIcon && (
                    <span className={cn(styles.icon, styles[size])}>{leftIcon}</span>
                )}

                {children}

                {rightIcon && (
                    <span className={cn(styles.icon, styles[size])}>{rightIcon}</span>
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';

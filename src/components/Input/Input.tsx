import React from 'react';
import { cn } from '@/utils/cn';
import styles from './Input.module.css';

export type InputState = 'default' | 'error' | 'success' | 'warning';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Visual state of the input */
    state?: InputState;
    /** Size of the input */
    size?: InputSize;
    /** Label text */
    label?: string;
    /** Helper text below input */
    helperText?: string;
    /** Error message (overrides helperText when state is error) */
    errorMessage?: string;
    /** Icon to display on the left */
    leftIcon?: React.ReactNode;
    /** Icon to display on the right */
    rightIcon?: React.ReactNode;
    /** Make input required */
    required?: boolean;
    /** Full width */
    fullWidth?: boolean;
    /** Additional CSS class for wrapper */
    wrapperClassName?: string;
}

/**
 * Input component with states, sizes, labels and icons.
 * 
 * @example
 * ```tsx
 * <Input label="Email" placeholder="Enter email" />
 * <Input state="error" errorMessage="Invalid email" />
 * <Input leftIcon={<SearchIcon />} placeholder="Search..." />
 * ```
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            state = 'default',
            size = 'md',
            label,
            helperText,
            errorMessage,
            leftIcon,
            rightIcon,
            required = false,
            fullWidth = false,
            wrapperClassName,
            className,
            disabled,
            ...props
        },
        ref
    ) => {
        // Determine final state
        const finalState = errorMessage ? 'error' : state;
        const displayHelperText = errorMessage || helperText;

        const wrapperClasses = cn(
            styles.wrapper,
            styles[finalState],
            styles[size],
            fullWidth && styles.fullWidth,
            wrapperClassName
        );

        const inputClasses = cn(
            styles.input,
            leftIcon && styles.hasLeftIcon,
            rightIcon && styles.hasRightIcon,
            className
        );

        return (
            <div className={wrapperClasses}>
                {label && (
                    <label className={cn(styles.label, required && styles.required)}>
                        {label}
                    </label>
                )}

                <div className={styles.inputContainer}>
                    {leftIcon && (
                        <span className={styles.leftIcon}>{leftIcon}</span>
                    )}

                    <input
                        ref={ref}
                        className={inputClasses}
                        disabled={disabled}
                        required={required}
                        aria-invalid={finalState === 'error'}
                        {...props}
                    />

                    {rightIcon && (
                        <span className={styles.rightIcon}>{rightIcon}</span>
                    )}
                </div>

                {displayHelperText && (
                    <span className={styles.helperText}>{displayHelperText}</span>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

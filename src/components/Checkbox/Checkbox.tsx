import React from 'react';
import { cn } from '@/utils/cn';
import styles from './Checkbox.module.css';

export type CheckboxSize = 'sm' | 'md' | 'lg';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    /** Size of the checkbox */
    size?: CheckboxSize;
    /** Label text */
    label?: string;
    /** Helper text below label */
    helperText?: string;
    /** Show indeterminate state */
    indeterminate?: boolean;
    /** Error state */
    error?: boolean;
    /** Additional class for wrapper */
    wrapperClassName?: string;
}

/**
 * Checkbox component with label and helper text.
 * 
 * @example
 * ```tsx
 * <Checkbox label="Accept terms" />
 * <Checkbox label="Select all" indeterminate />
 * <Checkbox label="Required" error helperText="This field is required" />
 * ```
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            size = 'md',
            label,
            helperText,
            indeterminate = false,
            error = false,
            checked,
            disabled,
            wrapperClassName,
            className,
            onChange,
            ...props
        },
        ref
    ) => {
        const innerRef = React.useRef<HTMLInputElement>(null);
        const resolvedRef = (ref as React.RefObject<HTMLInputElement>) || innerRef;

        // Handle indeterminate state
        React.useEffect(() => {
            if (resolvedRef.current) {
                resolvedRef.current.indeterminate = indeterminate;
            }
        }, [indeterminate, resolvedRef]);

        const wrapperClasses = cn(
            styles.wrapper,
            styles[size],
            checked && styles.checked,
            indeterminate && styles.indeterminate,
            disabled && styles.disabled,
            error && styles.error,
            wrapperClassName
        );

        return (
            <label className={wrapperClasses}>
                <input
                    ref={resolvedRef}
                    type="checkbox"
                    className={cn(styles.hiddenInput, className)}
                    checked={checked}
                    disabled={disabled}
                    onChange={onChange}
                    {...props}
                />

                <span className={styles.checkbox}>
                    {indeterminate ? (
                        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14" />
                        </svg>
                    ) : (
                        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M20 6L9 17l-5-5" />
                        </svg>
                    )}
                </span>

                {(label || helperText) && (
                    <span className={styles.content}>
                        {label && <span className={styles.label}>{label}</span>}
                        {helperText && <span className={styles.helperText}>{helperText}</span>}
                    </span>
                )}
            </label>
        );
    }
);

Checkbox.displayName = 'Checkbox';

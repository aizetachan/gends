import React from 'react';
import { cn } from '@/utils/cn';
import styles from './Toggle.module.css';

export type ToggleSize = 'sm' | 'md' | 'lg';

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    /** Size of the toggle */
    size?: ToggleSize;
    /** Label text */
    label?: string;
    /** Position label to the left of toggle */
    labelLeft?: boolean;
    /** Additional class for wrapper */
    wrapperClassName?: string;
}

/**
 * Toggle/Switch component for boolean values.
 * 
 * @example
 * ```tsx
 * <Toggle label="Dark mode" />
 * <Toggle label="Notifications" checked />
 * <Toggle label="Setting" labelLeft />
 * ```
 */
export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
    (
        {
            size = 'md',
            label,
            labelLeft = false,
            checked,
            disabled,
            wrapperClassName,
            className,
            onChange,
            ...props
        },
        ref
    ) => {
        const wrapperClasses = cn(
            styles.wrapper,
            styles[size],
            checked && styles.checked,
            disabled && styles.disabled,
            labelLeft && styles.labelLeft,
            wrapperClassName
        );

        return (
            <label className={wrapperClasses}>
                <input
                    ref={ref}
                    type="checkbox"
                    role="switch"
                    className={cn(styles.hiddenInput, className)}
                    checked={checked}
                    disabled={disabled}
                    onChange={onChange}
                    aria-checked={checked}
                    {...props}
                />

                <span className={styles.track}>
                    <span className={styles.thumb} />
                </span>

                {label && <span className={styles.label}>{label}</span>}
            </label>
        );
    }
);

Toggle.displayName = 'Toggle';

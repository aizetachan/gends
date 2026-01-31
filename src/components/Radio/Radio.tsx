import React from 'react';
import { cn } from '@/utils/cn';
import styles from './Radio.module.css';

export type RadioSize = 'sm' | 'md' | 'lg';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    /** Size of the radio */
    size?: RadioSize;
    /** Label text */
    label?: string;
    /** Description below label */
    description?: string;
    /** Error state */
    error?: boolean;
    /** Additional class for wrapper */
    wrapperClassName?: string;
}

/**
 * Radio component for single selection from options.
 * 
 * @example
 * ```tsx
 * <Radio name="size" value="small" label="Small" />
 * <Radio name="size" value="medium" label="Medium" checked />
 * <Radio name="size" value="large" label="Large" description="Best for presentations" />
 * ```
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
    (
        {
            size = 'md',
            label,
            description,
            error = false,
            checked,
            disabled,
            wrapperClassName,
            className,
            ...props
        },
        ref
    ) => {
        const wrapperClasses = cn(
            styles.wrapper,
            styles[size],
            checked && styles.checked,
            disabled && styles.disabled,
            error && styles.error,
            wrapperClassName
        );

        return (
            <label className={wrapperClasses}>
                <input
                    ref={ref}
                    type="radio"
                    className={cn(styles.hiddenInput, className)}
                    checked={checked}
                    disabled={disabled}
                    {...props}
                />

                <span className={styles.radio}>
                    <span className={styles.dot} />
                </span>

                {(label || description) && (
                    <span className={styles.content}>
                        {label && <span className={styles.label}>{label}</span>}
                        {description && <span className={styles.description}>{description}</span>}
                    </span>
                )}
            </label>
        );
    }
);

Radio.displayName = 'Radio';

/* ===== RADIO GROUP ===== */

export interface RadioGroupProps {
    /** Group label */
    label?: string;
    /** Radio options */
    children: React.ReactNode;
    /** Layout direction */
    horizontal?: boolean;
    /** Additional class */
    className?: string;
}

/**
 * RadioGroup component for grouping radio options.
 * 
 * @example
 * ```tsx
 * <RadioGroup label="Size">
 *   <Radio name="size" value="sm" label="Small" />
 *   <Radio name="size" value="md" label="Medium" />
 *   <Radio name="size" value="lg" label="Large" />
 * </RadioGroup>
 * ```
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
    label,
    children,
    horizontal = false,
    className,
}) => {
    return (
        <div className={className} role="radiogroup" aria-label={label}>
            {label && <div className={styles.groupLabel}>{label}</div>}
            <div className={cn(styles.group, horizontal && styles.horizontal)}>
                {children}
            </div>
        </div>
    );
};

RadioGroup.displayName = 'RadioGroup';

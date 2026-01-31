import React from 'react';
import { cn } from '@/utils/cn';
import styles from './TextArea.module.css';

export type TextAreaState = 'default' | 'error' | 'success';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** Visual state */
    state?: TextAreaState;
    /** Label text */
    label?: string;
    /** Helper text below textarea */
    helperText?: string;
    /** Error message (overrides helperText) */
    errorMessage?: string;
    /** Show character count */
    showCharCount?: boolean;
    /** Max characters (enables limit warning) */
    maxLength?: number;
    /** Disable resize */
    noResize?: boolean;
    /** Make field required */
    required?: boolean;
    /** Additional class for wrapper */
    wrapperClassName?: string;
}

/**
 * TextArea component for multi-line text input.
 * 
 * @example
 * ```tsx
 * <TextArea label="Description" placeholder="Enter description..." />
 * <TextArea label="Bio" maxLength={200} showCharCount />
 * <TextArea state="error" errorMessage="This field is required" />
 * ```
 */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    (
        {
            state = 'default',
            label,
            helperText,
            errorMessage,
            showCharCount = false,
            maxLength,
            noResize = false,
            required = false,
            wrapperClassName,
            className,
            value,
            defaultValue,
            disabled,
            ...props
        },
        ref
    ) => {
        const [charCount, setCharCount] = React.useState(
            String(value || defaultValue || '').length
        );

        const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setCharCount(e.target.value.length);
            props.onChange?.(e);
        };

        const finalState = errorMessage ? 'error' : state;
        const displayHelperText = errorMessage || helperText;

        const isNearLimit = maxLength && charCount >= maxLength * 0.9;
        const isOverLimit = maxLength && charCount > maxLength;

        const wrapperClasses = cn(
            styles.wrapper,
            styles[finalState],
            noResize && styles.noResize,
            wrapperClassName
        );

        return (
            <div className={wrapperClasses}>
                {label && (
                    <label className={cn(styles.label, required && styles.required)}>
                        {label}
                    </label>
                )}

                <textarea
                    ref={ref}
                    className={cn(styles.textarea, className)}
                    value={value}
                    defaultValue={defaultValue}
                    maxLength={maxLength}
                    disabled={disabled}
                    required={required}
                    aria-invalid={finalState === 'error'}
                    onChange={handleChange}
                    {...props}
                />

                {(displayHelperText || showCharCount) && (
                    <div className={styles.footer}>
                        {displayHelperText && (
                            <span className={styles.helperText}>{displayHelperText}</span>
                        )}
                        {showCharCount && (
                            <span className={cn(
                                styles.charCount,
                                isNearLimit && !isOverLimit && styles.limit,
                                isOverLimit && styles.exceeded
                            )}>
                                {charCount}{maxLength && ` / ${maxLength}`}
                            </span>
                        )}
                    </div>
                )}
            </div>
        );
    }
);

TextArea.displayName = 'TextArea';

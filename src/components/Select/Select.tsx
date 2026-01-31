import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/utils/cn';
import styles from './Select.module.css';

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface SelectProps {
    /** Options to select from */
    options: SelectOption[];
    /** Currently selected value */
    value?: string;
    /** Default value (uncontrolled) */
    defaultValue?: string;
    /** Callback when value changes */
    onChange?: (value: string) => void;
    /** Placeholder text */
    placeholder?: string;
    /** Label text */
    label?: string;
    /** Helper text */
    helperText?: string;
    /** Error message */
    errorMessage?: string;
    /** Size */
    size?: SelectSize;
    /** Disabled state */
    disabled?: boolean;
    /** Required field */
    required?: boolean;
    /** Additional class */
    className?: string;
}

/**
 * Select component for choosing from options.
 */
export const Select: React.FC<SelectProps> = ({
    options,
    value,
    defaultValue,
    onChange,
    placeholder = 'Select an option',
    label,
    helperText,
    errorMessage,
    size = 'md',
    disabled = false,
    required = false,
    className,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const wrapperRef = useRef<HTMLDivElement>(null);

    const currentValue = value !== undefined ? value : internalValue;
    const selectedOption = options.find(o => o.value === currentValue);
    const hasError = !!errorMessage;

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (disabled) return;

        switch (e.key) {
            case 'Enter':
            case ' ':
                e.preventDefault();
                setIsOpen(!isOpen);
                break;
            case 'Escape':
                setIsOpen(false);
                break;
            case 'ArrowDown':
                e.preventDefault();
                if (!isOpen) {
                    setIsOpen(true);
                }
                break;
        }
    };

    const handleSelect = (option: SelectOption) => {
        if (option.disabled) return;

        if (value === undefined) {
            setInternalValue(option.value);
        }
        onChange?.(option.value);
        setIsOpen(false);
    };

    return (
        <div
            ref={wrapperRef}
            className={cn(
                styles.wrapper,
                styles[size],
                hasError && styles.error,
                className
            )}
        >
            {label && (
                <label className={cn(styles.label, required && styles.required)}>
                    {label}
                </label>
            )}

            <button
                type="button"
                className={cn(styles.trigger, isOpen && styles.triggerOpen)}
                onClick={() => !disabled && setIsOpen(!isOpen)}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
            >
                <span className={cn(styles.triggerContent, !selectedOption && styles.placeholder)}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <svg
                    className={cn(styles.chevron, isOpen && styles.chevronOpen)}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>

            {isOpen && (
                <div className={styles.dropdown} role="listbox">
                    {options.length === 0 ? (
                        <div className={styles.emptyState}>No options available</div>
                    ) : (
                        options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                className={cn(
                                    styles.option,
                                    option.value === currentValue && styles.optionSelected,
                                    option.disabled && styles.optionDisabled
                                )}
                                onClick={() => handleSelect(option)}
                                role="option"
                                aria-selected={option.value === currentValue}
                                disabled={option.disabled}
                            >
                                <svg
                                    className={styles.checkIcon}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                                {option.label}
                            </button>
                        ))
                    )}
                </div>
            )}

            {(helperText || errorMessage) && (
                <span className={styles.helperText}>
                    {errorMessage || helperText}
                </span>
            )}
        </div>
    );
};

Select.displayName = 'Select';

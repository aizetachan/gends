import React, { useState, useRef, useCallback, useEffect } from 'react';
import { cn } from '@/utils/cn';
import styles from './Slider.module.css';

export type SliderSize = 'sm' | 'md' | 'lg';

export interface SliderProps {
    /** Current value */
    value?: number;
    /** Default value (uncontrolled) */
    defaultValue?: number;
    /** Minimum value */
    min?: number;
    /** Maximum value */
    max?: number;
    /** Step increment */
    step?: number;
    /** Label */
    label?: string;
    /** Show value */
    showValue?: boolean;
    /** Value formatter */
    formatValue?: (value: number) => string;
    /** Size */
    size?: SliderSize;
    /** Disabled state */
    disabled?: boolean;
    /** Callback when value changes */
    onChange?: (value: number) => void;
    /** Callback when dragging ends */
    onChangeEnd?: (value: number) => void;
    /** Show marks */
    marks?: { value: number; label?: string }[];
    /** Additional class */
    className?: string;
}

/**
 * Slider component for selecting numeric values.
 */
export const Slider: React.FC<SliderProps> = ({
    value,
    defaultValue = 0,
    min = 0,
    max = 100,
    step = 1,
    label,
    showValue = true,
    formatValue = (v) => String(v),
    size = 'md',
    disabled = false,
    onChange,
    onChangeEnd,
    marks,
    className,
}) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [isDragging, setIsDragging] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);

    const currentValue = value !== undefined ? value : internalValue;

    // Calculate percentage
    const percentage = ((currentValue - min) / (max - min)) * 100;

    // Get value from position
    const getValueFromPosition = useCallback((clientX: number) => {
        if (!trackRef.current) return currentValue;

        const rect = trackRef.current.getBoundingClientRect();
        const position = (clientX - rect.left) / rect.width;
        const rawValue = min + position * (max - min);
        const steppedValue = Math.round(rawValue / step) * step;
        return Math.min(max, Math.max(min, steppedValue));
    }, [min, max, step, currentValue]);

    // Handle mouse/touch events
    const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
        if (disabled) return;

        e.preventDefault();
        setIsDragging(true);

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const newValue = getValueFromPosition(clientX);

        if (value === undefined) {
            setInternalValue(newValue);
        }
        onChange?.(newValue);
    }, [disabled, getValueFromPosition, onChange, value]);

    // Handle drag move
    useEffect(() => {
        if (!isDragging) return;

        const handleMove = (e: MouseEvent | TouchEvent) => {
            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            const newValue = getValueFromPosition(clientX);

            if (value === undefined) {
                setInternalValue(newValue);
            }
            onChange?.(newValue);
        };

        const handleEnd = () => {
            setIsDragging(false);
            onChangeEnd?.(value !== undefined ? value : internalValue);
        };

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('touchmove', handleMove);
        window.addEventListener('touchend', handleEnd);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging, getValueFromPosition, onChange, onChangeEnd, value, internalValue]);

    // Handle keyboard
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (disabled) return;

        let newValue = currentValue;

        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowUp':
                newValue = Math.min(max, currentValue + step);
                break;
            case 'ArrowLeft':
            case 'ArrowDown':
                newValue = Math.max(min, currentValue - step);
                break;
            case 'Home':
                newValue = min;
                break;
            case 'End':
                newValue = max;
                break;
            default:
                return;
        }

        e.preventDefault();

        if (value === undefined) {
            setInternalValue(newValue);
        }
        onChange?.(newValue);
        onChangeEnd?.(newValue);
    };

    return (
        <div className={cn(styles.wrapper, styles[size], disabled && styles.disabled, className)}>
            {(label || showValue) && (
                <div className={styles.label}>
                    {label && <span>{label}</span>}
                    {showValue && <span className={styles.value}>{formatValue(currentValue)}</span>}
                </div>
            )}

            <div
                className={styles.slider}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
            >
                <div ref={trackRef} className={styles.track}>
                    <div className={styles.fill} style={{ width: `${percentage}%` }} />
                </div>

                <div
                    className={styles.thumb}
                    style={{ left: `${percentage}%` }}
                    role="slider"
                    tabIndex={disabled ? -1 : 0}
                    aria-valuenow={currentValue}
                    aria-valuemin={min}
                    aria-valuemax={max}
                    aria-label={label}
                    onKeyDown={handleKeyDown}
                />
            </div>

            {marks && marks.length > 0 && (
                <div className={styles.marks}>
                    {marks.map((mark) => (
                        <span key={mark.value} className={styles.mark}>
                            {mark.label ?? formatValue(mark.value)}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

Slider.displayName = 'Slider';

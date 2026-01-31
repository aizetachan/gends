import React, { useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '@/utils/cn';
import styles from './ColorPicker.module.css';

export interface ColorPickerProps {
    /** Current color (hex) */
    value?: string;
    /** Default color */
    defaultValue?: string;
    /** Callback when color changes */
    onChange?: (color: string) => void;
    /** Label */
    label?: string;
    /** Show hex input */
    showInput?: boolean;
    /** Preset colors */
    presets?: string[];
    /** Show alpha slider */
    showAlpha?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Additional class */
    className?: string;
}

// Color conversion utilities
const hexToHsl = (hex: string): { h: number; s: number; l: number } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return { h: 0, s: 100, l: 50 };

    let r = parseInt(result[1], 16) / 255;
    let g = parseInt(result[2], 16) / 255;
    let b = parseInt(result[3], 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
};

const hslToHex = (h: number, s: number, l: number): string => {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;

    let r = 0, g = 0, b = 0;

    if (0 <= h && h < 60) { r = c; g = x; b = 0; }
    else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
    else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
    else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
    else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
    else if (300 <= h && h < 360) { r = c; g = 0; b = x; }

    const toHex = (n: number) => {
        const hex = Math.round((n + m) * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const DEFAULT_PRESETS = [
    '#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4',
    '#3b82f6', '#8b5cf6', '#ec4899', '#000000', '#ffffff',
];

/**
 * ColorPicker component for selecting colors.
 */
export const ColorPicker: React.FC<ColorPickerProps> = ({
    value,
    defaultValue = '#3b82f6',
    onChange,
    label,
    showInput = true,
    presets = DEFAULT_PRESETS,
    showAlpha = false,
    disabled = false,
    className,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalColor, setInternalColor] = useState(defaultValue);
    const [hsl, setHsl] = useState(() => hexToHsl(defaultValue));
    const wrapperRef = useRef<HTMLDivElement>(null);

    const currentColor = value !== undefined ? value : internalColor;

    // Sync HSL when value changes
    useEffect(() => {
        if (value) {
            setHsl(hexToHsl(value));
        }
    }, [value]);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const updateColor = useCallback((newHsl: { h: number; s: number; l: number }) => {
        const hex = hslToHex(newHsl.h, newHsl.s, newHsl.l);
        if (value === undefined) {
            setInternalColor(hex);
        }
        setHsl(newHsl);
        onChange?.(hex);
    }, [value, onChange]);

    const handleHexInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let hex = e.target.value;
        if (!hex.startsWith('#')) hex = '#' + hex;
        if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
            if (value === undefined) {
                setInternalColor(hex);
            }
            setHsl(hexToHsl(hex));
            onChange?.(hex);
        }
    };

    const handlePresetClick = (color: string) => {
        if (value === undefined) {
            setInternalColor(color);
        }
        setHsl(hexToHsl(color));
        onChange?.(color);
    };

    return (
        <div ref={wrapperRef} className={cn(styles.wrapper, className)} style={{ position: 'relative' }}>
            {label && <label className={styles.label}>{label}</label>}

            <button
                type="button"
                className={styles.trigger}
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
            >
                <div className={styles.swatch} style={{ backgroundColor: currentColor }} />
                <span className={styles.colorValue}>{currentColor.toUpperCase()}</span>
            </button>

            {isOpen && (
                <div className={styles.picker}>
                    {/* Saturation/Lightness Box */}
                    <div
                        className={styles.saturationBox}
                        style={{ backgroundColor: hslToHex(hsl.h, 100, 50) }}
                        onMouseDown={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const handleMove = (moveEvent: MouseEvent) => {
                                const x = Math.max(0, Math.min(1, (moveEvent.clientX - rect.left) / rect.width));
                                const y = Math.max(0, Math.min(1, (moveEvent.clientY - rect.top) / rect.height));
                                updateColor({ h: hsl.h, s: x * 100, l: 100 - y * 100 });
                            };
                            handleMove(e.nativeEvent);

                            const handleUp = () => {
                                window.removeEventListener('mousemove', handleMove);
                                window.removeEventListener('mouseup', handleUp);
                            };

                            window.addEventListener('mousemove', handleMove);
                            window.addEventListener('mouseup', handleUp);
                        }}
                    >
                        <div className={styles.saturationGradient} />
                        <div className={styles.lightnessGradient} />
                        <div
                            className={styles.saturationHandle}
                            style={{
                                left: `${hsl.s}%`,
                                top: `${100 - hsl.l}%`,
                                backgroundColor: currentColor,
                            }}
                        />
                    </div>

                    {/* Hue Slider */}
                    <div
                        className={styles.hueSlider}
                        onMouseDown={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const handleMove = (moveEvent: MouseEvent) => {
                                const x = Math.max(0, Math.min(1, (moveEvent.clientX - rect.left) / rect.width));
                                updateColor({ ...hsl, h: x * 360 });
                            };
                            handleMove(e.nativeEvent);

                            const handleUp = () => {
                                window.removeEventListener('mousemove', handleMove);
                                window.removeEventListener('mouseup', handleUp);
                            };

                            window.addEventListener('mousemove', handleMove);
                            window.addEventListener('mouseup', handleUp);
                        }}
                    >
                        <div
                            className={styles.hueHandle}
                            style={{ left: `${(hsl.h / 360) * 100}%` }}
                        />
                    </div>

                    {/* Hex Input */}
                    {showInput && (
                        <div className={styles.inputRow}>
                            <input
                                type="text"
                                className={styles.hexInput}
                                value={currentColor}
                                onChange={handleHexInput}
                                maxLength={7}
                            />
                        </div>
                    )}

                    {/* Presets */}
                    {presets.length > 0 && (
                        <div className={styles.presets}>
                            {presets.map((color) => (
                                <button
                                    key={color}
                                    type="button"
                                    className={styles.presetSwatch}
                                    style={{ backgroundColor: color }}
                                    onClick={() => handlePresetClick(color)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

ColorPicker.displayName = 'ColorPicker';

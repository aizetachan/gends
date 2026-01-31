import React from 'react';
import { cn } from '@/utils/cn';
import styles from './Divider.module.css';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerSpacing = 'none' | 'sm' | 'md' | 'lg';

export interface DividerProps {
    /** Orientation */
    orientation?: DividerOrientation;
    /** Spacing around divider */
    spacing?: DividerSpacing;
    /** Label text */
    label?: string;
    /** Additional class */
    className?: string;
}

/**
 * Divider component for separating content.
 * 
 * @example
 * ```tsx
 * <Divider />
 * <Divider spacing="lg" />
 * <Divider label="OR" />
 * ```
 */
export const Divider: React.FC<DividerProps> = ({
    orientation = 'horizontal',
    spacing = 'md',
    label,
    className,
}) => {
    // If has label, render with label
    if (label && orientation === 'horizontal') {
        return (
            <div
                className={cn(
                    styles.dividerWithLabel,
                    styles[`spacing${spacing.charAt(0).toUpperCase() + spacing.slice(1)}`],
                    className
                )}
                role="separator"
            >
                <div className={styles.dividerLine} />
                <span className={styles.dividerLabel}>{label}</span>
                <div className={styles.dividerLine} />
            </div>
        );
    }

    return (
        <hr
            className={cn(
                styles.divider,
                styles[orientation],
                styles[`spacing${spacing.charAt(0).toUpperCase() + spacing.slice(1)}`],
                className
            )}
            role="separator"
            aria-orientation={orientation}
        />
    );
};

Divider.displayName = 'Divider';

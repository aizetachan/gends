import React from 'react';
import { cn } from '@/utils/cn';
import styles from './Badge.module.css';

export type BadgeVariant = 'default' | 'success' | 'error' | 'warning' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
    /** Content of the badge */
    children: React.ReactNode;
    /** Visual variant */
    variant?: BadgeVariant;
    /** Size of the badge */
    size?: BadgeSize;
    /** Use outlined style */
    outlined?: boolean;
    /** Show a dot indicator */
    dot?: boolean;
    /** Make badge removable with X button */
    removable?: boolean;
    /** Callback when remove button is clicked */
    onRemove?: () => void;
    /** Additional CSS class */
    className?: string;
}

/**
 * Badge component for status indicators and labels.
 * 
 * @example
 * ```tsx
 * <Badge variant="success">APPROVED</Badge>
 * <Badge variant="error" dot>FAILED</Badge>
 * <Badge variant="info" removable onRemove={handleRemove}>Tag</Badge>
 * ```
 */
export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'default',
    size = 'md',
    outlined = false,
    dot = false,
    removable = false,
    onRemove,
    className,
}) => {
    const classNames = cn(
        styles.badge,
        styles[variant],
        styles[size],
        outlined && styles.outlined,
        className
    );

    return (
        <span className={classNames}>
            {dot && <span className={styles.dot} />}
            {children}
            {removable && (
                <button
                    type="button"
                    className={styles.removeButton}
                    onClick={onRemove}
                    aria-label="Remove"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
            )}
        </span>
    );
};

Badge.displayName = 'Badge';

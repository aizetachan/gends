import React from 'react';
import { cn } from '@/utils/cn';
import styles from './IconButton.module.css';

export type IconButtonVariant = 'default' | 'ghost' | 'filled' | 'danger';
export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type IconButtonShape = 'circular' | 'square';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual variant */
    variant?: IconButtonVariant;
    /** Size of the button */
    size?: IconButtonSize;
    /** Shape of the button */
    shape?: IconButtonShape;
    /** The icon to display */
    icon: React.ReactNode;
    /** Accessible label (required for screen readers) */
    'aria-label': string;
    /** Additional CSS class */
    className?: string;
}

/**
 * IconButton component for icon-only actions.
 * 
 * @example
 * ```tsx
 * <IconButton icon={<CloseIcon />} aria-label="Close" />
 * <IconButton icon={<MenuIcon />} variant="filled" shape="circular" aria-label="Menu" />
 * ```
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    (
        {
            variant = 'default',
            size = 'md',
            shape = 'square',
            icon,
            className,
            ...props
        },
        ref
    ) => {
        const classNames = cn(
            styles.iconButton,
            styles[variant],
            styles[size],
            styles[shape],
            className
        );

        return (
            <button
                ref={ref}
                className={classNames}
                type="button"
                {...props}
            >
                {icon}
            </button>
        );
    }
);

IconButton.displayName = 'IconButton';

import React from 'react';
import { cn } from '@/utils/cn';
import styles from './ToolBar.module.css';

export type ToolBarVariant = 'floating' | 'inline';
export type ToolBarPosition = 'top' | 'bottom' | 'left' | 'right';
export type ToolBarSize = 'sm' | 'md' | 'lg';

export interface ToolBarProps {
    /** ToolBar content */
    children: React.ReactNode;
    /** Variant */
    variant?: ToolBarVariant;
    /** Position (for floating variant) */
    position?: ToolBarPosition;
    /** Size */
    size?: ToolBarSize;
    /** Additional class */
    className?: string;
}

/**
 * ToolBar component for canvas tools.
 */
export const ToolBar: React.FC<ToolBarProps> = ({
    children,
    variant = 'inline',
    position = 'bottom',
    size = 'md',
    className,
}) => {
    return (
        <div
            className={cn(
                styles.toolbar,
                styles[variant],
                styles[size],
                variant === 'floating' && styles[`position${position.charAt(0).toUpperCase() + position.slice(1)}`],
                className
            )}
            role="toolbar"
        >
            {children}
        </div>
    );
};

ToolBar.displayName = 'ToolBar';

/* ===== TOOL BUTTON ===== */

export interface ToolButtonProps {
    /** Icon */
    icon: React.ReactNode;
    /** Label for accessibility and tooltip */
    label: string;
    /** Active state */
    active?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Show tooltip */
    showTooltip?: boolean;
    /** Tooltip position */
    tooltipPosition?: 'bottom' | 'right';
    /** Click handler */
    onClick?: () => void;
    /** Additional class */
    className?: string;
}

export const ToolButton: React.FC<ToolButtonProps> = ({
    icon,
    label,
    active = false,
    disabled = false,
    showTooltip = true,
    tooltipPosition = 'bottom',
    onClick,
    className,
}) => {
    const button = (
        <button
            type="button"
            className={cn(styles.toolButton, active && styles.toolButtonActive, className)}
            onClick={onClick}
            disabled={disabled}
            aria-label={label}
            aria-pressed={active}
        >
            <span className={styles.toolButtonIcon}>{icon}</span>
        </button>
    );

    if (!showTooltip) return button;

    return (
        <div className={styles.tooltipWrapper}>
            {button}
            <div className={cn(styles.tooltip, styles[`tooltip${tooltipPosition.charAt(0).toUpperCase() + tooltipPosition.slice(1)}`])}>
                {label}
            </div>
        </div>
    );
};

ToolButton.displayName = 'ToolButton';

/* ===== TOOL DIVIDER ===== */

export const ToolDivider: React.FC = () => {
    return <div className={styles.divider} />;
};

ToolDivider.displayName = 'ToolDivider';

/* ===== TOOL GROUP ===== */

export interface ToolGroupProps {
    children: React.ReactNode;
    className?: string;
}

export const ToolGroup: React.FC<ToolGroupProps> = ({
    children,
    className,
}) => {
    return <div className={cn(styles.group, className)}>{children}</div>;
};

ToolGroup.displayName = 'ToolGroup';

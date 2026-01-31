import React from 'react';
import { cn } from '@/utils/cn';
import styles from './Sidebar.module.css';

export type SidebarSize = 'sm' | 'md' | 'lg';
export type SidebarPosition = 'left' | 'right';

export interface SidebarProps {
    /** Sidebar content */
    children: React.ReactNode;
    /** Size */
    size?: SidebarSize;
    /** Position */
    position?: SidebarPosition;
    /** Collapsed state */
    collapsed?: boolean;
    /** Additional class */
    className?: string;
}

/**
 * Sidebar component for navigation and tools.
 */
export const Sidebar: React.FC<SidebarProps> = ({
    children,
    size = 'md',
    position = 'left',
    collapsed = false,
    className,
}) => {
    return (
        <aside
            className={cn(
                styles.sidebar,
                collapsed ? styles.sidebarSm : styles[`sidebar${size.charAt(0).toUpperCase() + size.slice(1)}`],
                styles[`sidebar${position.charAt(0).toUpperCase() + position.slice(1)}`],
                collapsed && styles.collapsed,
                className
            )}
        >
            {children}
        </aside>
    );
};

Sidebar.displayName = 'Sidebar';

/* ===== SIDEBAR HEADER ===== */

export interface SidebarHeaderProps {
    /** Title */
    title?: string;
    /** Logo or icon */
    logo?: React.ReactNode;
    /** Actions */
    actions?: React.ReactNode;
    /** Additional class */
    className?: string;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
    title,
    logo,
    actions,
    className,
}) => {
    return (
        <div className={cn(styles.header, className)}>
            {logo}
            {title && <h2 className={styles.headerTitle}>{title}</h2>}
            {actions && <div className={styles.headerActions}>{actions}</div>}
        </div>
    );
};

SidebarHeader.displayName = 'SidebarHeader';

/* ===== SIDEBAR CONTENT ===== */

export interface SidebarContentProps {
    children: React.ReactNode;
    noPadding?: boolean;
    className?: string;
}

export const SidebarContent: React.FC<SidebarContentProps> = ({
    children,
    noPadding = false,
    className,
}) => {
    return (
        <div className={cn(styles.content, noPadding && styles.contentNoPadding, className)}>
            {children}
        </div>
    );
};

SidebarContent.displayName = 'SidebarContent';

/* ===== SIDEBAR FOOTER ===== */

export interface SidebarFooterProps {
    children: React.ReactNode;
    className?: string;
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({
    children,
    className,
}) => {
    return <div className={cn(styles.footer, className)}>{children}</div>;
};

SidebarFooter.displayName = 'SidebarFooter';

/* ===== SIDEBAR SECTION ===== */

export interface SidebarSectionProps {
    /** Section title */
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export const SidebarSection: React.FC<SidebarSectionProps> = ({
    title,
    children,
    className,
}) => {
    return (
        <div className={cn(styles.section, className)}>
            {title && <div className={styles.sectionTitle}>{title}</div>}
            {children}
        </div>
    );
};

SidebarSection.displayName = 'SidebarSection';

/* ===== SIDEBAR NAV ITEM ===== */

export interface SidebarNavItemProps {
    /** Label */
    label: string;
    /** Icon */
    icon?: React.ReactNode;
    /** Badge count */
    badge?: number | string;
    /** Active state */
    active?: boolean;
    /** Click handler */
    onClick?: () => void;
    /** Additional class */
    className?: string;
}

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
    label,
    icon,
    badge,
    active = false,
    onClick,
    className,
}) => {
    return (
        <button
            type="button"
            className={cn(styles.navItem, active && styles.navItemActive, className)}
            onClick={onClick}
        >
            {icon && <span className={styles.navItemIcon}>{icon}</span>}
            <span className={styles.navItemLabel}>{label}</span>
            {badge !== undefined && <span className={styles.navItemBadge}>{badge}</span>}
        </button>
    );
};

SidebarNavItem.displayName = 'SidebarNavItem';

/* ===== SIDEBAR DIVIDER ===== */

export const SidebarDivider: React.FC = () => {
    return <div className={styles.divider} />;
};

SidebarDivider.displayName = 'SidebarDivider';

import React, { useState } from 'react';
import { cn } from '@/utils/cn';
import styles from './Panel.module.css';

export type PanelPosition = 'static' | 'left' | 'right';

export interface PanelProps {
    /** Panel content */
    children: React.ReactNode;
    /** Position mode */
    position?: PanelPosition;
    /** Additional class */
    className?: string;
}

/**
 * Panel component for sidebars and tool panels.
 */
export const Panel: React.FC<PanelProps> = ({
    children,
    position = 'static',
    className,
}) => {
    return (
        <div
            className={cn(
                styles.panel,
                position !== 'static' && styles.floating,
                position === 'left' && styles.floatingLeft,
                position === 'right' && styles.floatingRight,
                className
            )}
        >
            {children}
        </div>
    );
};

Panel.displayName = 'Panel';

/* ===== PANEL HEADER ===== */

export interface PanelHeaderProps {
    /** Title */
    title: string;
    /** Actions (buttons, etc.) */
    actions?: React.ReactNode;
    /** Additional class */
    className?: string;
}

export const PanelHeader: React.FC<PanelHeaderProps> = ({
    title,
    actions,
    className,
}) => {
    return (
        <div className={cn(styles.header, className)}>
            <h3 className={styles.title}>{title}</h3>
            {actions && <div className={styles.headerActions}>{actions}</div>}
        </div>
    );
};

PanelHeader.displayName = 'PanelHeader';

/* ===== PANEL BODY ===== */

export interface PanelBodyProps {
    children: React.ReactNode;
    noPadding?: boolean;
    className?: string;
}

export const PanelBody: React.FC<PanelBodyProps> = ({
    children,
    noPadding = false,
    className,
}) => {
    return (
        <div className={cn(styles.body, noPadding && styles.bodyNoPadding, className)}>
            {children}
        </div>
    );
};

PanelBody.displayName = 'PanelBody';

/* ===== PANEL FOOTER ===== */

export interface PanelFooterProps {
    children: React.ReactNode;
    className?: string;
}

export const PanelFooter: React.FC<PanelFooterProps> = ({
    children,
    className,
}) => {
    return <div className={cn(styles.footer, className)}>{children}</div>;
};

PanelFooter.displayName = 'PanelFooter';

/* ===== PANEL SECTION ===== */

export interface PanelSectionProps {
    /** Section title */
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export const PanelSection: React.FC<PanelSectionProps> = ({
    title,
    children,
    className,
}) => {
    return (
        <div className={cn(styles.section, className)}>
            {title && <h4 className={styles.sectionTitle}>{title}</h4>}
            {children}
        </div>
    );
};

PanelSection.displayName = 'PanelSection';

/* ===== COLLAPSIBLE SECTION ===== */

export interface CollapsibleSectionProps {
    /** Section title */
    title: string;
    /** Default open state */
    defaultOpen?: boolean;
    children: React.ReactNode;
    className?: string;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
    title,
    defaultOpen = true,
    children,
    className,
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={className}>
            <button
                type="button"
                className={styles.collapsibleHeader}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                {title}
                <svg
                    className={cn(styles.collapsibleIcon, isOpen && styles.collapsibleIconOpen)}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>
            {isOpen && <div className={styles.collapsibleContent}>{children}</div>}
        </div>
    );
};

CollapsibleSection.displayName = 'CollapsibleSection';

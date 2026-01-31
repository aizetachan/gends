import React from 'react';
import { cn } from '@/utils/cn';
import styles from './Breadcrumb.module.css';

export type BreadcrumbSize = 'sm' | 'md' | 'lg';

export interface BreadcrumbItem {
    /** Display label */
    label: string;
    /** URL or path */
    href?: string;
    /** Icon before label */
    icon?: React.ReactNode;
    /** Click handler (alternative to href) */
    onClick?: () => void;
}

export interface BreadcrumbProps {
    /** Breadcrumb items */
    items: BreadcrumbItem[];
    /** Size */
    size?: BreadcrumbSize;
    /** Custom separator */
    separator?: React.ReactNode;
    /** Max items before truncating (0 = no limit) */
    maxItems?: number;
    /** Additional class */
    className?: string;
}

// Default separator
const ChevronIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18l6-6-6-6" />
    </svg>
);

/**
 * Breadcrumb component for navigation hierarchy.
 * 
 * @example
 * ```tsx
 * <Breadcrumb
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Projects', href: '/projects' },
 *     { label: 'Current Project' },
 *   ]}
 * />
 * ```
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    items,
    size = 'md',
    separator = <ChevronIcon />,
    maxItems = 0,
    className,
}) => {
    // Handle truncation
    let displayItems = items;
    let showEllipsis = false;

    if (maxItems > 0 && items.length > maxItems) {
        const firstItem = items[0];
        const lastItems = items.slice(-(maxItems - 1));
        displayItems = [firstItem, ...lastItems];
        showEllipsis = true;
    }

    return (
        <nav
            className={cn(styles.breadcrumb, styles[size], className)}
            aria-label="Breadcrumb"
        >
            <ol style={{ display: 'flex', alignItems: 'center', gap: 'inherit', listStyle: 'none', margin: 0, padding: 0 }}>
                {displayItems.map((item, index) => {
                    const isFirst = index === 0;
                    const isLast = index === displayItems.length - 1;
                    const showEllipsisHere = showEllipsis && index === 1;

                    return (
                        <React.Fragment key={index}>
                            {!isFirst && showEllipsisHere && (
                                <>
                                    <li className={styles.separator} aria-hidden>
                                        {separator}
                                    </li>
                                    <li>
                                        <span className={styles.ellipsis}>...</span>
                                    </li>
                                </>
                            )}

                            {!isFirst && (
                                <li className={styles.separator} aria-hidden>
                                    {separator}
                                </li>
                            )}

                            <li className={cn(styles.item, isLast && styles.current)}>
                                {item.href || item.onClick ? (
                                    <a
                                        href={item.href || '#'}
                                        className={styles.link}
                                        onClick={(e) => {
                                            if (item.onClick) {
                                                e.preventDefault();
                                                item.onClick();
                                            }
                                        }}
                                        aria-current={isLast ? 'page' : undefined}
                                    >
                                        {item.icon && <span className={styles.icon}>{item.icon}</span>}
                                        {item.label}
                                    </a>
                                ) : (
                                    <span className={styles.link} aria-current={isLast ? 'page' : undefined}>
                                        {item.icon && <span className={styles.icon}>{item.icon}</span>}
                                        {item.label}
                                    </span>
                                )}
                            </li>
                        </React.Fragment>
                    );
                })}
            </ol>
        </nav>
    );
};

Breadcrumb.displayName = 'Breadcrumb';

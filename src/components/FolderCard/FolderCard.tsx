import React from 'react';
import { cn } from '@/utils/cn';
import styles from './FolderCard.module.css';

export type FolderCardSize = 'sm' | 'md' | 'lg';
export type FolderCardView = 'list' | 'grid';
export type FolderColor = 'default' | 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow' | 'pink';

export interface FolderCardProps {
    /** Folder name */
    name: string;
    /** Number of items */
    itemCount?: number;
    /** Custom meta text */
    meta?: string;
    /** Folder color */
    color?: FolderColor;
    /** Selected state */
    selected?: boolean;
    /** Size variant */
    size?: FolderCardSize;
    /** View mode */
    view?: FolderCardView;
    /** Click handler */
    onClick?: () => void;
    /** Double click handler */
    onDoubleClick?: () => void;
    /** Menu button click */
    onMenuClick?: (e: React.MouseEvent) => void;
    /** Additional class */
    className?: string;
}

// Folder Icon
const FolderIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M3 6a2 2 0 012-2h4.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293H19a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />
    </svg>
);

const MoreIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="1" />
        <circle cx="12" cy="5" r="1" />
        <circle cx="12" cy="19" r="1" />
    </svg>
);

/**
 * FolderCard component for displaying folders.
 */
export const FolderCard: React.FC<FolderCardProps> = ({
    name,
    itemCount,
    meta,
    color = 'default',
    selected = false,
    size = 'md',
    view = 'list',
    onClick,
    onDoubleClick,
    onMenuClick,
    className,
}) => {
    const colorClass = color !== 'default' ? styles[`icon${color.charAt(0).toUpperCase() + color.slice(1)}`] : undefined;

    const metaText = meta || (itemCount !== undefined ? `${itemCount} item${itemCount !== 1 ? 's' : ''}` : undefined);

    return (
        <div
            className={cn(
                styles.folderCard,
                styles[size],
                selected && styles.selected,
                view === 'grid' && styles.gridView,
                view === 'grid' && styles.gridViewWrapper,
                className
            )}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
            tabIndex={0}
            role="button"
            aria-pressed={selected}
        >
            <div className={cn(styles.icon, colorClass)}>
                <FolderIcon />
            </div>

            <div className={styles.info}>
                <span className={styles.name} title={name}>{name}</span>
                {metaText && <span className={styles.meta}>{metaText}</span>}
            </div>

            {onMenuClick && (
                <button
                    type="button"
                    className={styles.menuButton}
                    onClick={(e) => {
                        e.stopPropagation();
                        onMenuClick(e);
                    }}
                    aria-label="More options"
                >
                    <MoreIcon />
                </button>
            )}
        </div>
    );
};

FolderCard.displayName = 'FolderCard';

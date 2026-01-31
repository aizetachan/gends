import React from 'react';
import { cn } from '@/utils/cn';
import styles from './FileCard.module.css';

export type FileCardSize = 'sm' | 'md' | 'lg';
export type FileCardView = 'grid' | 'list';

export interface FileCardProps {
    /** File name */
    name: string;
    /** Thumbnail URL */
    thumbnail?: string;
    /** File type/extension badge */
    fileType?: string;
    /** Last modified date */
    modifiedAt?: string;
    /** File size */
    size?: string;
    /** Selected state */
    selected?: boolean;
    /** Size variant */
    cardSize?: FileCardSize;
    /** View mode */
    view?: FileCardView;
    /** Click handler */
    onClick?: () => void;
    /** Double click handler */
    onDoubleClick?: () => void;
    /** Menu button click */
    onMenuClick?: (e: React.MouseEvent) => void;
    /** Additional class */
    className?: string;
}

// Icons
const FileIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
);

const MoreIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="1" />
        <circle cx="12" cy="5" r="1" />
        <circle cx="12" cy="19" r="1" />
    </svg>
);

const ImageIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
    </svg>
);

/**
 * FileCard component for displaying files in a grid or list.
 */
export const FileCard: React.FC<FileCardProps> = ({
    name,
    thumbnail,
    fileType,
    modifiedAt,
    size,
    selected = false,
    cardSize = 'md',
    view = 'grid',
    onClick,
    onDoubleClick,
    onMenuClick,
    className,
}) => {
    const isImage = thumbnail || fileType?.match(/^(jpg|jpeg|png|gif|svg|webp)$/i);

    return (
        <div
            className={cn(
                styles.fileCard,
                styles[cardSize],
                selected && styles.selected,
                view === 'list' && styles.listView,
                className
            )}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
            tabIndex={0}
            role="button"
            aria-pressed={selected}
        >
            <div className={styles.thumbnail}>
                {thumbnail ? (
                    <img src={thumbnail} alt={name} className={styles.thumbnailImage} />
                ) : (
                    <div className={styles.thumbnailPlaceholder}>
                        {isImage ? <ImageIcon /> : <FileIcon />}
                    </div>
                )}

                {fileType && view === 'grid' && (
                    <span className={styles.badge}>{fileType.toUpperCase()}</span>
                )}

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

            <div className={styles.info}>
                <span className={styles.name} title={name}>{name}</span>
                <div className={styles.meta}>
                    {fileType && view === 'list' && <span>{fileType.toUpperCase()}</span>}
                    {size && (
                        <>
                            {fileType && view === 'list' && <span className={styles.metaDot} />}
                            <span>{size}</span>
                        </>
                    )}
                    {modifiedAt && (
                        <>
                            {(size || (fileType && view === 'list')) && <span className={styles.metaDot} />}
                            <span>{modifiedAt}</span>
                        </>
                    )}
                </div>
            </div>

            {view === 'list' && onMenuClick && (
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

FileCard.displayName = 'FileCard';

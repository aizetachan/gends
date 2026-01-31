import React from 'react';
import { cn } from '@/utils/cn';
import styles from './Skeleton.module.css';

export type SkeletonVariant = 'text' | 'circle' | 'rectangle';

export interface SkeletonProps {
    /** Variant type */
    variant?: SkeletonVariant;
    /** Width */
    width?: string | number;
    /** Height */
    height?: string | number;
    /** Additional class */
    className?: string;
}

/**
 * Skeleton component for loading placeholders.
 */
export const Skeleton: React.FC<SkeletonProps> = ({
    variant = 'text',
    width,
    height,
    className,
}) => {
    return (
        <div
            className={cn(styles.skeleton, styles[variant], className)}
            style={{
                width: typeof width === 'number' ? `${width}px` : width,
                height: typeof height === 'number' ? `${height}px` : height,
            }}
        />
    );
};

Skeleton.displayName = 'Skeleton';

/* ===== SKELETON TEXT ===== */

export interface SkeletonTextProps {
    /** Number of lines */
    lines?: number;
    /** Additional class */
    className?: string;
}

export const SkeletonText: React.FC<SkeletonTextProps> = ({
    lines = 3,
    className,
}) => {
    return (
        <div className={cn(styles.container, className)}>
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton
                    key={i}
                    variant="text"
                    width={i === lines - 1 ? '60%' : '100%'}
                    height={16}
                />
            ))}
        </div>
    );
};

SkeletonText.displayName = 'SkeletonText';

/* ===== SKELETON AVATAR ===== */

export interface SkeletonAvatarProps {
    /** Size in pixels */
    size?: number;
    /** With text lines */
    withText?: boolean;
    /** Additional class */
    className?: string;
}

export const SkeletonAvatar: React.FC<SkeletonAvatarProps> = ({
    size = 40,
    withText = false,
    className,
}) => {
    if (withText) {
        return (
            <div className={cn(styles.avatarTextSkeleton, className)}>
                <Skeleton variant="circle" width={size} height={size} />
                <div className={styles.avatarTextContent}>
                    <Skeleton variant="text" width={120} height={14} />
                    <Skeleton variant="text" width={80} height={12} />
                </div>
            </div>
        );
    }

    return <Skeleton variant="circle" width={size} height={size} className={className} />;
};

SkeletonAvatar.displayName = 'SkeletonAvatar';

/* ===== SKELETON CARD ===== */

export interface SkeletonCardProps {
    /** Show image placeholder */
    withImage?: boolean;
    /** Additional class */
    className?: string;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({
    withImage = true,
    className,
}) => {
    return (
        <div className={cn(styles.cardSkeleton, className)}>
            {withImage && (
                <Skeleton
                    variant="rectangle"
                    width="100%"
                    height={160}
                    className="margin-bottom-4"
                    style={{ marginBottom: '16px' }}
                />
            )}
            <Skeleton variant="text" width="70%" height={20} style={{ marginBottom: '12px' }} />
            <SkeletonText lines={2} />
        </div>
    );
};

SkeletonCard.displayName = 'SkeletonCard';

/* ===== SKELETON LIST ITEM ===== */

export interface SkeletonListItemProps {
    /** Show avatar */
    withAvatar?: boolean;
    /** Additional class */
    className?: string;
}

export const SkeletonListItem: React.FC<SkeletonListItemProps> = ({
    withAvatar = true,
    className,
}) => {
    return (
        <div className={cn(styles.listItemSkeleton, className)}>
            {withAvatar && <Skeleton variant="circle" width={40} height={40} />}
            <div className={styles.listItemContent}>
                <Skeleton variant="text" width="60%" height={14} />
                <Skeleton variant="text" width="40%" height={12} />
            </div>
        </div>
    );
};

SkeletonListItem.displayName = 'SkeletonListItem';

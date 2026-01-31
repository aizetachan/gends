import React, { useState } from 'react';
import { cn } from '@/utils/cn';
import styles from './Avatar.module.css';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';
export type AvatarShape = 'circle' | 'square';

export interface AvatarProps {
    /** Image source URL */
    src?: string;
    /** Alt text for image */
    alt?: string;
    /** Name for generating initials */
    name?: string;
    /** Size of avatar */
    size?: AvatarSize;
    /** Status indicator */
    status?: AvatarStatus;
    /** Shape of avatar */
    shape?: AvatarShape;
    /** Additional class */
    className?: string;
}

// Generate initials from name
const getInitials = (name: string): string => {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) {
        return parts[0].slice(0, 2).toUpperCase();
    }
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

// Default user icon
const UserIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

/**
 * Avatar component for user images or initials.
 * 
 * @example
 * ```tsx
 * <Avatar src="/user.jpg" alt="John Doe" />
 * <Avatar name="John Doe" size="lg" />
 * <Avatar name="Jane" status="online" />
 * ```
 */
export const Avatar: React.FC<AvatarProps> = ({
    src,
    alt,
    name,
    size = 'md',
    status,
    shape = 'circle',
    className,
}) => {
    const [imgError, setImgError] = useState(false);

    const showImage = src && !imgError;
    const initials = name ? getInitials(name) : null;

    const classNames = cn(
        styles.avatar,
        styles[size],
        shape === 'square' && styles.square,
        className
    );

    const statusClass = status && {
        online: styles.statusOnline,
        offline: styles.statusOffline,
        busy: styles.statusBusy,
        away: styles.statusAway,
    }[status];

    return (
        <div className={classNames}>
            {showImage ? (
                <img
                    src={src}
                    alt={alt || name || 'Avatar'}
                    className={styles.image}
                    onError={() => setImgError(true)}
                />
            ) : initials ? (
                <span className={styles.initials}>{initials}</span>
            ) : (
                <span className={styles.fallbackIcon}>
                    <UserIcon />
                </span>
            )}

            {status && <span className={cn(styles.status, statusClass)} />}
        </div>
    );
};

Avatar.displayName = 'Avatar';

/* ===== AVATAR STACK ===== */

export interface AvatarStackProps {
    /** Array of avatar props */
    avatars: AvatarProps[];
    /** Maximum avatars to show */
    max?: number;
    /** Size of all avatars */
    size?: AvatarSize;
    /** Additional class */
    className?: string;
}

/**
 * AvatarStack component for showing multiple avatars.
 * 
 * @example
 * ```tsx
 * <AvatarStack 
 *   avatars={[
 *     { name: 'John' },
 *     { name: 'Jane' },
 *     { name: 'Bob' },
 *   ]} 
 *   max={3} 
 * />
 * ```
 */
export const AvatarStack: React.FC<AvatarStackProps> = ({
    avatars,
    max = 4,
    size = 'md',
    className,
}) => {
    const visibleAvatars = avatars.slice(0, max);
    const remaining = avatars.length - max;

    return (
        <div className={cn(styles.stack, className)}>
            {remaining > 0 && (
                <div className={cn(styles.avatar, styles[size], styles.stackItem, styles.stackCount)}>
                    +{remaining}
                </div>
            )}
            {visibleAvatars.reverse().map((avatar, index) => (
                <Avatar
                    key={index}
                    {...avatar}
                    size={size}
                    className={styles.stackItem}
                />
            ))}
        </div>
    );
};

AvatarStack.displayName = 'AvatarStack';

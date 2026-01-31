import React from 'react';
import { cn } from '@/utils/cn';
import styles from './EmptyState.module.css';

export type EmptyStateSize = 'sm' | 'md' | 'lg';

export interface EmptyStateProps {
    /** Icon */
    icon?: React.ReactNode;
    /** Title */
    title: string;
    /** Description */
    description?: string;
    /** Action buttons */
    actions?: React.ReactNode;
    /** Size */
    size?: EmptyStateSize;
    /** Additional class */
    className?: string;
}

/**
 * EmptyState component for no-data states.
 */
export const EmptyState: React.FC<EmptyStateProps> = ({
    icon,
    title,
    description,
    actions,
    size = 'md',
    className,
}) => {
    return (
        <div className={cn(styles.emptyState, styles[size], className)}>
            {icon && <div className={styles.icon}>{icon}</div>}
            <h3 className={styles.title}>{title}</h3>
            {description && <p className={styles.description}>{description}</p>}
            {actions && <div className={styles.actions}>{actions}</div>}
        </div>
    );
};

EmptyState.displayName = 'EmptyState';

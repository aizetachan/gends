import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/utils/cn';
import { Button } from '../Button';
import styles from './AlertDialog.module.css';

export type AlertDialogVariant = 'danger' | 'warning' | 'info';

export interface AlertDialogProps {
    /** Dialog is open */
    open: boolean;
    /** Close handler */
    onClose: () => void;
    /** Title */
    title: string;
    /** Description */
    description?: string;
    /** Variant for icon color */
    variant?: AlertDialogVariant;
    /** Show icon */
    showIcon?: boolean;
    /** Confirm button text */
    confirmLabel?: string;
    /** Cancel button text */
    cancelLabel?: string;
    /** Confirm handler */
    onConfirm?: () => void;
    /** Stack buttons vertically */
    stackButtons?: boolean;
    /** Loading state for confirm */
    loading?: boolean;
}

// Icons
const AlertIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <path d="M12 9v4M12 17h.01" />
    </svg>
);

/**
 * AlertDialog for confirmations and alerts.
 */
export const AlertDialog: React.FC<AlertDialogProps> = ({
    open,
    onClose,
    title,
    description,
    variant = 'danger',
    showIcon = true,
    confirmLabel = 'Confirm',
    cancelLabel = 'Cancel',
    onConfirm,
    stackButtons = false,
    loading = false,
}) => {
    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && !loading) {
                onClose();
            }
        };

        if (open) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [open, onClose, loading]);

    if (!open) return null;

    const handleConfirm = () => {
        onConfirm?.();
    };

    const iconClass = {
        danger: styles.iconDanger,
        warning: styles.iconWarning,
        info: styles.iconInfo,
    }[variant];

    const confirmVariant = variant === 'danger' ? 'danger' : 'primary';

    return createPortal(
        <div
            className={styles.overlay}
            onClick={(e) => {
                if (e.target === e.currentTarget && !loading) {
                    onClose();
                }
            }}
        >
            <div
                className={styles.dialog}
                role="alertdialog"
                aria-labelledby="alert-title"
                aria-describedby="alert-description"
            >
                {showIcon && (
                    <div className={cn(styles.icon, iconClass)}>
                        <AlertIcon />
                    </div>
                )}

                <h2 id="alert-title" className={styles.title}>{title}</h2>

                {description && (
                    <p id="alert-description" className={styles.description}>
                        {description}
                    </p>
                )}

                <div className={cn(
                    styles.actions,
                    stackButtons ? styles.actionsStacked : styles.actionsInline
                )}>
                    <Button
                        variant="secondary"
                        onClick={onClose}
                        disabled={loading}
                        fullWidth={stackButtons}
                    >
                        {cancelLabel}
                    </Button>
                    <Button
                        variant={confirmVariant}
                        onClick={handleConfirm}
                        loading={loading}
                        fullWidth={stackButtons}
                    >
                        {confirmLabel}
                    </Button>
                </div>
            </div>
        </div>,
        document.body
    );
};

AlertDialog.displayName = 'AlertDialog';

import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/utils/cn';
import styles from './Toast.module.css';

export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

export interface ToastProps {
    /** Unique ID */
    id: string;
    /** Title text */
    title?: string;
    /** Message text */
    message?: string;
    /** Visual variant */
    variant?: ToastVariant;
    /** Duration in ms (0 = permanent) */
    duration?: number;
    /** Show close button */
    closable?: boolean;
    /** Action button */
    action?: {
        label: string;
        onClick: () => void;
    };
    /** Callback when closed */
    onClose?: (id: string) => void;
}

// Icons
const SuccessIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
    </svg>
);

const ErrorIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M15 9l-6 6M9 9l6 6" />
    </svg>
);

const WarningIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <path d="M12 9v4M12 17h.01" />
    </svg>
);

const InfoIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
    </svg>
);

const CloseIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 6L6 18M6 6l12 12" />
    </svg>
);

/**
 * Toast component for notifications.
 */
export const Toast: React.FC<ToastProps> = ({
    id,
    title,
    message,
    variant = 'default',
    duration = 5000,
    closable = true,
    action,
    onClose,
}) => {
    const [isExiting, setIsExiting] = useState(false);

    const handleClose = useCallback(() => {
        setIsExiting(true);
        setTimeout(() => {
            onClose?.(id);
        }, 200);
    }, [id, onClose]);

    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(handleClose, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, handleClose]);

    const Icon = {
        default: null,
        success: SuccessIcon,
        error: ErrorIcon,
        warning: WarningIcon,
        info: InfoIcon,
    }[variant];

    return (
        <div
            className={cn(
                styles.toast,
                variant !== 'default' && styles[variant],
                isExiting && styles.toastExiting
            )}
            role="alert"
        >
            {Icon && (
                <span className={styles.icon}>
                    <Icon />
                </span>
            )}

            <div className={styles.content}>
                {title && <p className={styles.title}>{title}</p>}
                {message && <p className={styles.message}>{message}</p>}
                {action && (
                    <div className={styles.action}>
                        <button
                            type="button"
                            className={styles.actionButton}
                            onClick={action.onClick}
                        >
                            {action.label}
                        </button>
                    </div>
                )}
            </div>

            {closable && (
                <button
                    type="button"
                    className={styles.closeButton}
                    onClick={handleClose}
                    aria-label="Close"
                >
                    <CloseIcon />
                </button>
            )}
        </div>
    );
};

Toast.displayName = 'Toast';

/* ===== TOAST CONTAINER ===== */

export interface ToastContainerProps {
    /** Toast position */
    position?: ToastPosition;
    /** Toasts to display */
    toasts: ToastProps[];
    /** Callback when toast closes */
    onClose?: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
    position = 'top-right',
    toasts,
    onClose,
}) => {
    const positionClass = {
        'top-right': styles.topRight,
        'top-left': styles.topLeft,
        'bottom-right': styles.bottomRight,
        'bottom-left': styles.bottomLeft,
        'top-center': styles.topCenter,
        'bottom-center': styles.bottomCenter,
    }[position];

    if (toasts.length === 0) return null;

    return createPortal(
        <div className={cn(styles.toastContainer, positionClass)}>
            {toasts.map((toast) => (
                <Toast key={toast.id} {...toast} onClose={onClose} />
            ))}
        </div>,
        document.body
    );
};

ToastContainer.displayName = 'ToastContainer';

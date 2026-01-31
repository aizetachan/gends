import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/utils/cn';
import styles from './Modal.module.css';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';

export interface ModalProps {
    /** Whether modal is visible */
    open: boolean;
    /** Callback when modal should close */
    onClose: () => void;
    /** Size of the modal */
    size?: ModalSize;
    /** Title text */
    title?: string;
    /** Description text below title */
    description?: string;
    /** Show close button */
    showCloseButton?: boolean;
    /** Close on overlay click */
    closeOnOverlayClick?: boolean;
    /** Close on Escape key */
    closeOnEscape?: boolean;
    /** Modal content */
    children: React.ReactNode;
    /** Additional class for modal container */
    className?: string;
}

/**
 * Modal component for dialogs and overlays.
 * 
 * @example
 * ```tsx
 * <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Confirm">
 *   <Modal.Body>Are you sure?</Modal.Body>
 *   <Modal.Footer>
 *     <Button onClick={() => setIsOpen(false)}>Cancel</Button>
 *     <Button variant="primary">Confirm</Button>
 *   </Modal.Footer>
 * </Modal>
 * ```
 */
export const Modal: React.FC<ModalProps> = ({
    open,
    onClose,
    size = 'md',
    title,
    description,
    showCloseButton = true,
    closeOnOverlayClick = true,
    closeOnEscape = true,
    children,
    className,
}) => {
    // Handle escape key
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (closeOnEscape && e.key === 'Escape') {
                onClose();
            }
        },
        [closeOnEscape, onClose]
    );

    useEffect(() => {
        if (open) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [open, handleKeyDown]);

    // Handle overlay click
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!open) return null;

    const modalContent = (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div
                className={cn(styles.modal, styles[size], className)}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? 'modal-title' : undefined}
                aria-describedby={description ? 'modal-description' : undefined}
            >
                {(title || showCloseButton) && (
                    <div className={styles.header}>
                        <div className={styles.headerContent}>
                            {title && (
                                <h2 id="modal-title" className={styles.title}>
                                    {title}
                                </h2>
                            )}
                            {description && (
                                <p id="modal-description" className={styles.description}>
                                    {description}
                                </p>
                            )}
                        </div>
                        {showCloseButton && (
                            <button
                                type="button"
                                className={styles.closeButton}
                                onClick={onClose}
                                aria-label="Close modal"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>
                )}
                {children}
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

Modal.displayName = 'Modal';

/* ===== MODAL BODY ===== */

export interface ModalBodyProps {
    children: React.ReactNode;
    /** Remove padding */
    noPadding?: boolean;
    className?: string;
}

export const ModalBody: React.FC<ModalBodyProps> = ({
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

ModalBody.displayName = 'ModalBody';

/* ===== MODAL FOOTER ===== */

export interface ModalFooterProps {
    children: React.ReactNode;
    /** Alignment */
    align?: 'left' | 'center' | 'right' | 'space-between';
    className?: string;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
    children,
    align = 'right',
    className,
}) => {
    const alignClass = {
        left: styles.footerLeft,
        center: styles.footerCenter,
        right: '',
        'space-between': styles.footerSpaceBetween,
    }[align];

    return (
        <div className={cn(styles.footer, alignClass, className)}>{children}</div>
    );
};

ModalFooter.displayName = 'ModalFooter';

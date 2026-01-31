import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/utils/cn';
import styles from './Popover.module.css';

export type PopoverPosition = 'top' | 'bottom' | 'left' | 'right';

export interface PopoverProps {
    /** Trigger element */
    trigger: React.ReactElement;
    /** Popover content */
    children: React.ReactNode;
    /** Title */
    title?: string;
    /** Position */
    position?: PopoverPosition;
    /** Show arrow */
    showArrow?: boolean;
    /** Show close button */
    showCloseButton?: boolean;
    /** Controlled open state */
    open?: boolean;
    /** Callback when open changes */
    onOpenChange?: (open: boolean) => void;
    /** Additional class */
    className?: string;
}

/**
 * Popover component for rich content overlays.
 */
export const Popover: React.FC<PopoverProps> = ({
    trigger,
    children,
    title,
    position = 'bottom',
    showArrow = true,
    showCloseButton = true,
    open: controlledOpen,
    onOpenChange,
    className,
}) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

    const setOpen = (value: boolean) => {
        if (controlledOpen === undefined) {
            setInternalOpen(value);
        }
        onOpenChange?.(value);
    };

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    // Close on escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    return (
        <div ref={wrapperRef} className={cn(styles.wrapper, className)}>
            {React.cloneElement(trigger, {
                onClick: (e: React.MouseEvent) => {
                    trigger.props.onClick?.(e);
                    setOpen(!isOpen);
                },
                'aria-expanded': isOpen,
                'aria-haspopup': 'dialog',
            })}

            {isOpen && (
                <div className={cn(styles.popover, styles[position])} role="dialog">
                    {showArrow && <div className={styles.arrow} />}

                    {(title || showCloseButton) && (
                        <div className={styles.header}>
                            {title && <h3 className={styles.title}>{title}</h3>}
                            {showCloseButton && (
                                <button
                                    type="button"
                                    className={styles.closeButton}
                                    onClick={() => setOpen(false)}
                                    aria-label="Close"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    )}

                    <div className={styles.content}>{children}</div>
                </div>
            )}
        </div>
    );
};

Popover.displayName = 'Popover';

/* ===== POPOVER FOOTER ===== */

export interface PopoverFooterProps {
    children: React.ReactNode;
    className?: string;
}

export const PopoverFooter: React.FC<PopoverFooterProps> = ({ children, className }) => {
    return <div className={cn(styles.footer, className)}>{children}</div>;
};

PopoverFooter.displayName = 'PopoverFooter';

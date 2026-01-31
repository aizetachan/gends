import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/utils/cn';
import styles from './Dropdown.module.css';

export type DropdownPosition =
    | 'top-start' | 'top-end'
    | 'bottom-start' | 'bottom-end'
    | 'left-start' | 'right-start';

export interface DropdownProps {
    /** Trigger element */
    trigger: React.ReactElement;
    /** Menu content */
    children: React.ReactNode;
    /** Position of dropdown */
    position?: DropdownPosition;
    /** Controlled open state */
    open?: boolean;
    /** Callback when open state changes */
    onOpenChange?: (open: boolean) => void;
    /** Additional class */
    className?: string;
}

/**
 * Dropdown component for contextual menus.
 */
export const Dropdown: React.FC<DropdownProps> = ({
    trigger,
    children,
    position = 'bottom-start',
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

    const positionClass = {
        'top-start': styles.topStart,
        'top-end': styles.topEnd,
        'bottom-start': styles.bottomStart,
        'bottom-end': styles.bottomEnd,
        'left-start': styles.leftStart,
        'right-start': styles.rightStart,
    }[position];

    return (
        <div ref={wrapperRef} className={cn(styles.wrapper, className)}>
            {React.cloneElement(trigger, {
                onClick: (e: React.MouseEvent) => {
                    trigger.props.onClick?.(e);
                    setOpen(!isOpen);
                },
                'aria-expanded': isOpen,
                'aria-haspopup': true,
            })}

            {isOpen && (
                <div className={cn(styles.menu, positionClass)} role="menu">
                    {children}
                </div>
            )}
        </div>
    );
};

Dropdown.displayName = 'Dropdown';

/* ===== DROPDOWN ITEM ===== */

export interface DropdownItemProps {
    /** Item content */
    children: React.ReactNode;
    /** Icon before label */
    icon?: React.ReactNode;
    /** Keyboard shortcut */
    shortcut?: string;
    /** Danger/destructive action */
    danger?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Click handler */
    onClick?: () => void;
    /** Additional class */
    className?: string;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
    children,
    icon,
    shortcut,
    danger = false,
    disabled = false,
    onClick,
    className,
}) => {
    return (
        <button
            type="button"
            className={cn(
                styles.item,
                danger && styles.itemDanger,
                className
            )}
            onClick={onClick}
            disabled={disabled}
            role="menuitem"
        >
            {icon && <span className={styles.itemIcon}>{icon}</span>}
            {children}
            {shortcut && <span className={styles.itemShortcut}>{shortcut}</span>}
        </button>
    );
};

DropdownItem.displayName = 'DropdownItem';

/* ===== DROPDOWN SEPARATOR ===== */

export const DropdownSeparator: React.FC = () => {
    return <div className={styles.separator} role="separator" />;
};

DropdownSeparator.displayName = 'DropdownSeparator';

/* ===== DROPDOWN LABEL ===== */

export interface DropdownLabelProps {
    children: React.ReactNode;
}

export const DropdownLabel: React.FC<DropdownLabelProps> = ({ children }) => {
    return <div className={styles.label}>{children}</div>;
};

DropdownLabel.displayName = 'DropdownLabel';

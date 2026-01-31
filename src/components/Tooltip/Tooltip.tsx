import React, { useState } from 'react';
import { cn } from '@/utils/cn';
import styles from './Tooltip.module.css';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
    /** Tooltip content */
    content: React.ReactNode;
    /** Trigger element */
    children: React.ReactElement;
    /** Position */
    position?: TooltipPosition;
    /** Allow multiline content */
    multiline?: boolean;
    /** Delay before showing (ms) */
    delay?: number;
    /** Additional class for tooltip */
    className?: string;
}

/**
 * Tooltip component for showing hints on hover.
 * 
 * @example
 * ```tsx
 * <Tooltip content="This is helpful info">
 *   <Button>Hover me</Button>
 * </Tooltip>
 * ```
 */
export const Tooltip: React.FC<TooltipProps> = ({
    content,
    children,
    position = 'top',
    multiline = false,
    delay = 0,
    className,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (delay > 0) {
            const id = setTimeout(() => setIsVisible(true), delay);
            setTimeoutId(id);
        } else {
            setIsVisible(true);
        }
    };

    const handleMouseLeave = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setIsVisible(false);
    };

    return (
        <div
            className={styles.tooltipWrapper}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
        >
            {children}
            <div
                className={cn(
                    styles.tooltip,
                    styles[position],
                    multiline && styles.multiline,
                    isVisible && styles.tooltipVisible,
                    className
                )}
                role="tooltip"
            >
                {content}
            </div>
        </div>
    );
};

Tooltip.displayName = 'Tooltip';

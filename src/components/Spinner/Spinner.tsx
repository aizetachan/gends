import React from 'react';
import { cn } from '@/utils/cn';
import styles from './Spinner.module.css';

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SpinnerColor = 'primary' | 'white' | 'current';

export interface SpinnerProps {
    /** Size of spinner */
    size?: SpinnerSize;
    /** Color variant */
    color?: SpinnerColor;
    /** Additional class */
    className?: string;
    /** Aria label */
    label?: string;
}

/**
 * Spinner component for loading states.
 */
export const Spinner: React.FC<SpinnerProps> = ({
    size = 'md',
    color = 'primary',
    className,
    label = 'Loading',
}) => {
    return (
        <div
            className={cn(styles.spinner, styles[size], styles[color], className)}
            role="status"
            aria-label={label}
        />
    );
};

Spinner.displayName = 'Spinner';

/* ===== LOADING DOTS ===== */

export interface LoadingDotsProps {
    /** Size of dots */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** Additional class */
    className?: string;
    /** Aria label */
    label?: string;
}

/**
 * LoadingDots component for inline loading states.
 */
export const LoadingDots: React.FC<LoadingDotsProps> = ({
    size = 'md',
    className,
    label = 'Loading',
}) => {
    return (
        <div
            className={cn(styles.loadingDots, styles[size], className)}
            role="status"
            aria-label={label}
        >
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
        </div>
    );
};

LoadingDots.displayName = 'LoadingDots';

/* ===== PROGRESS LINEAR ===== */

export type ProgressSize = 'sm' | 'md' | 'lg';
export type ProgressColor = 'primary' | 'success' | 'warning' | 'error';

export interface ProgressProps {
    /** Progress value 0-100 */
    value?: number;
    /** Indeterminate mode */
    indeterminate?: boolean;
    /** Size */
    size?: ProgressSize;
    /** Color */
    color?: ProgressColor;
    /** Label text */
    label?: string;
    /** Show percentage */
    showValue?: boolean;
    /** Additional class */
    className?: string;
}

/**
 * Progress component for showing completion.
 */
export const Progress: React.FC<ProgressProps> = ({
    value = 0,
    indeterminate = false,
    size = 'md',
    color = 'primary',
    label,
    showValue = false,
    className,
}) => {
    const clampedValue = Math.min(100, Math.max(0, value));

    const sizeClass = {
        sm: styles.progressSm,
        md: styles.progressMd,
        lg: styles.progressLg,
    }[size];

    const colorClass = color !== 'primary' && {
        success: styles.progressSuccess,
        warning: styles.progressWarning,
        error: styles.progressError,
    }[color];

    const content = (
        <div
            className={cn(
                styles.progress,
                sizeClass,
                colorClass,
                indeterminate && styles.progressIndeterminate,
                className
            )}
            role="progressbar"
            aria-valuenow={indeterminate ? undefined : clampedValue}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            <div
                className={styles.progressBar}
                style={indeterminate ? undefined : { width: `${clampedValue}%` }}
            />
        </div>
    );

    if (label || showValue) {
        return (
            <div className={styles.progressWrapper}>
                {(label || showValue) && (
                    <div className={styles.progressLabel}>
                        {label && <span>{label}</span>}
                        {showValue && !indeterminate && <span>{clampedValue}%</span>}
                    </div>
                )}
                {content}
            </div>
        );
    }

    return content;
};

Progress.displayName = 'Progress';

/* ===== PROGRESS CIRCULAR ===== */

export interface ProgressCircularProps {
    /** Progress value 0-100 */
    value?: number;
    /** Indeterminate mode */
    indeterminate?: boolean;
    /** Size in pixels */
    size?: number;
    /** Stroke width */
    strokeWidth?: number;
    /** Color */
    color?: ProgressColor;
    /** Show value in center */
    showValue?: boolean;
    /** Additional class */
    className?: string;
}

/**
 * ProgressCircular component for circular progress.
 */
export const ProgressCircular: React.FC<ProgressCircularProps> = ({
    value = 0,
    indeterminate = false,
    size = 48,
    strokeWidth = 4,
    color = 'primary',
    showValue = false,
    className,
}) => {
    const clampedValue = Math.min(100, Math.max(0, value));
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (clampedValue / 100) * circumference;

    const colorClass = color !== 'primary' && {
        success: styles.progressCircularSuccess,
        warning: styles.progressCircularWarning,
        error: styles.progressCircularError,
    }[color];

    return (
        <div style={{ position: 'relative', width: size, height: size }}>
            <svg
                className={cn(
                    styles.progressCircular,
                    indeterminate && styles.progressCircularIndeterminate,
                    colorClass,
                    className
                )}
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
            >
                <circle
                    className={styles.progressCircularTrack}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    strokeWidth={strokeWidth}
                />
                <circle
                    className={styles.progressCircularBar}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={indeterminate ? undefined : offset}
                />
            </svg>
            {showValue && !indeterminate && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: size * 0.25,
                        fontWeight: 600,
                        color: 'var(--sg-color-text-primary)',
                    }}
                >
                    {clampedValue}%
                </div>
            )}
        </div>
    );
};

ProgressCircular.displayName = 'ProgressCircular';

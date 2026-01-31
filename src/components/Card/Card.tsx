import React from 'react';
import { cn } from '@/utils/cn';
import styles from './Card.module.css';

export type CardVariant = 'default' | 'outlined' | 'elevated' | 'ghost';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Visual variant */
    variant?: CardVariant;
    /** Padding size */
    padding?: CardPadding;
    /** Make card clickable/hoverable */
    interactive?: boolean;
    /** Selected state */
    selected?: boolean;
    /** Render as different element */
    as?: 'div' | 'article' | 'section';
}

/**
 * Card component for containing content.
 * 
 * @example
 * ```tsx
 * <Card>
 *   <Card.Header title="Title" subtitle="Subtitle" />
 *   <Card.Body>Content here</Card.Body>
 *   <Card.Footer>Footer content</Card.Footer>
 * </Card>
 * ```
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    (
        {
            variant = 'default',
            padding = 'none',
            interactive = false,
            selected = false,
            as: Element = 'div',
            className,
            children,
            ...props
        },
        ref
    ) => {
        const classNames = cn(
            styles.card,
            styles[variant],
            styles[`padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`],
            interactive && styles.interactive,
            selected && styles.selected,
            className
        );

        return (
            <Element
                ref={ref}
                className={classNames}
                tabIndex={interactive ? 0 : undefined}
                {...props}
            >
                {children}
            </Element>
        );
    }
);

Card.displayName = 'Card';

/* ===== CARD HEADER ===== */

export interface CardHeaderProps {
    /** Title text */
    title?: string;
    /** Subtitle text */
    subtitle?: string;
    /** Action element (button, icon, etc.) */
    action?: React.ReactNode;
    /** Additional class */
    className?: string;
    /** Children override */
    children?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
    title,
    subtitle,
    action,
    className,
    children,
}) => {
    if (children) {
        return <div className={cn(styles.header, className)}>{children}</div>;
    }

    return (
        <div className={cn(styles.header, className)}>
            <div className={styles.headerContent}>
                {title && <h3 className={styles.title}>{title}</h3>}
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
            {action && <div className={styles.headerAction}>{action}</div>}
        </div>
    );
};

CardHeader.displayName = 'CardHeader';

/* ===== CARD BODY ===== */

export interface CardBodyProps {
    children: React.ReactNode;
    className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className }) => {
    return <div className={cn(styles.body, className)}>{children}</div>;
};

CardBody.displayName = 'CardBody';

/* ===== CARD FOOTER ===== */

export interface CardFooterProps {
    children: React.ReactNode;
    /** Alignment of footer content */
    align?: 'left' | 'center' | 'right' | 'space-between';
    className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
    children,
    align = 'right',
    className,
}) => {
    const alignClass = {
        left: styles.footerLeft,
        center: styles.footerCenter,
        right: '', // default
        'space-between': styles.footerSpaceBetween,
    }[align];

    return (
        <div className={cn(styles.footer, alignClass, className)}>{children}</div>
    );
};

CardFooter.displayName = 'CardFooter';

/* ===== CARD IMAGE ===== */

export interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    /** Position of image */
    position?: 'top';
}

export const CardImage: React.FC<CardImageProps> = ({
    position = 'top',
    className,
    alt = '',
    ...props
}) => {
    return (
        <img
            className={cn(
                styles.image,
                position === 'top' && styles.imageTop,
                className
            )}
            alt={alt}
            {...props}
        />
    );
};

CardImage.displayName = 'CardImage';

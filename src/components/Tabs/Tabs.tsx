import React, { createContext, useContext, useState } from 'react';
import { cn } from '@/utils/cn';
import styles from './Tabs.module.css';

export type TabsVariant = 'default' | 'pills' | 'underline';

interface TabsContextValue {
    activeTab: string;
    setActiveTab: (value: string) => void;
    variant: TabsVariant;
}

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabsContext = () => {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error('Tabs components must be used within a Tabs provider');
    }
    return context;
};

/* ===== TABS ROOT ===== */

export interface TabsProps {
    /** Currently active tab value */
    value?: string;
    /** Default active tab value (uncontrolled) */
    defaultValue?: string;
    /** Callback when tab changes */
    onValueChange?: (value: string) => void;
    /** Visual variant */
    variant?: TabsVariant;
    /** Children */
    children: React.ReactNode;
    /** Additional class */
    className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
    value,
    defaultValue,
    onValueChange,
    variant = 'default',
    children,
    className,
}) => {
    const [internalValue, setInternalValue] = useState(defaultValue || '');

    const activeTab = value !== undefined ? value : internalValue;

    const setActiveTab = (newValue: string) => {
        if (value === undefined) {
            setInternalValue(newValue);
        }
        onValueChange?.(newValue);
    };

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab, variant }}>
            <div className={cn(styles.tabs, className)}>{children}</div>
        </TabsContext.Provider>
    );
};

Tabs.displayName = 'Tabs';

/* ===== TAB LIST ===== */

export interface TabListProps {
    children: React.ReactNode;
    className?: string;
}

export const TabList: React.FC<TabListProps> = ({ children, className }) => {
    const { variant } = useTabsContext();

    const variantClass = {
        default: '',
        pills: styles.tabListPills,
        underline: styles.tabListUnderline,
    }[variant];

    return (
        <div
            className={cn(styles.tabList, variantClass, className)}
            role="tablist"
        >
            {children}
        </div>
    );
};

TabList.displayName = 'TabList';

/* ===== TAB ===== */

export interface TabProps {
    /** Unique value for this tab */
    value: string;
    /** Tab label */
    children: React.ReactNode;
    /** Icon before label */
    icon?: React.ReactNode;
    /** Badge/count after label */
    badge?: React.ReactNode;
    /** Disabled state */
    disabled?: boolean;
    className?: string;
}

export const Tab: React.FC<TabProps> = ({
    value,
    children,
    icon,
    badge,
    disabled = false,
    className,
}) => {
    const { activeTab, setActiveTab, variant } = useTabsContext();
    const isActive = activeTab === value;

    const variantClass = {
        default: styles.tabDefault,
        pills: styles.tabPills,
        underline: styles.tabUnderline,
    }[variant];

    return (
        <button
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${value}`}
            tabIndex={isActive ? 0 : -1}
            disabled={disabled}
            className={cn(
                styles.tab,
                variantClass,
                isActive && styles.tabActive,
                className
            )}
            onClick={() => setActiveTab(value)}
        >
            {icon && <span className={styles.tabIcon}>{icon}</span>}
            {children}
            {badge && <span className={styles.tabBadge}>{badge}</span>}
        </button>
    );
};

Tab.displayName = 'Tab';

/* ===== TAB PANEL ===== */

export interface TabPanelProps {
    /** Value matching the Tab */
    value: string;
    /** Panel content */
    children: React.ReactNode;
    className?: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({
    value,
    children,
    className,
}) => {
    const { activeTab } = useTabsContext();
    const isActive = activeTab === value;

    return (
        <div
            id={`panel-${value}`}
            role="tabpanel"
            aria-labelledby={`tab-${value}`}
            hidden={!isActive}
            className={cn(
                styles.tabPanel,
                !isActive && styles.tabPanelHidden,
                className
            )}
        >
            {isActive && children}
        </div>
    );
};

TabPanel.displayName = 'TabPanel';

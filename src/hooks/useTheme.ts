import { useState, useEffect, useCallback } from 'react';

export type Theme = 'dark' | 'light';

export interface UseThemeReturn {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
    isDark: boolean;
    isLight: boolean;
}

const STORAGE_KEY = 'gends-theme';

/**
 * Hook to manage theme state with localStorage persistence
 * @param defaultTheme - Default theme to use (defaults to 'dark')
 */
export function useTheme(defaultTheme: Theme = 'dark'): UseThemeReturn {
    const [theme, setThemeState] = useState<Theme>(() => {
        // Check localStorage first
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
            if (stored === 'dark' || stored === 'light') {
                return stored;
            }
        }
        return defaultTheme;
    });

    // Apply theme to document
    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'light') {
            root.setAttribute('data-theme', 'light');
        } else {
            root.removeAttribute('data-theme');
        }

        // Persist to localStorage
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const setTheme = useCallback((newTheme: Theme) => {
        setThemeState(newTheme);
    }, []);

    const toggleTheme = useCallback(() => {
        setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    return {
        theme,
        setTheme,
        toggleTheme,
        isDark: theme === 'dark',
        isLight: theme === 'light',
    };
}

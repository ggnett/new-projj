import { createContext } from "react";

export const enum Theme {
    DARK = 'dark',
    NORMAL = 'normal',
}

export interface ThemeContextProps {
    theme?: Theme,
    setTheme?: (theme:Theme)=>void
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme'
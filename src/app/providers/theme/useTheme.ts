import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeRsult {
    toogleTheme: ()=>void,
    theme:Theme,
}

export function useTheme():UseThemeRsult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toogleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toogleTheme,
    };
}

import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeRsult {
    toogleTheme: ()=>void,
    theme:Theme,
}

export function useTheme():UseThemeRsult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toogleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.NORMAL;
            break;
        case Theme.NORMAL:
            newTheme = Theme.PURPLE;
            break;
        case Theme.PURPLE:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.NORMAL;
        }
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toogleTheme,
    };
}

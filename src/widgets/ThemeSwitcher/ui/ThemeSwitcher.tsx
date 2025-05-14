import { useTheme } from 'app/providers/theme/useTheme';
import { Theme } from 'app/providers/theme/ThemeContext';
import { memo } from 'react';
import Moon from '../../../../public/icons/moon 40x40.svg';
import Sun from '../../../../public/icons/sun 40x40.svg';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = memo(() => {
    const { theme, toogleTheme } = useTheme();

    return (
        <button data-testid="ThemeSwitcher" type="button" className={styles.but} onClick={toogleTheme}>
            {theme === Theme.DARK ? <Moon /> : <Sun />}
        </button>
    );
});

export default ThemeSwitcher;

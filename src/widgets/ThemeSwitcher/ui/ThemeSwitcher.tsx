import { useTheme } from 'app/providers/theme/useTheme';
import { Theme } from 'app/providers/theme/ThemeContext';
import Moon from '../../../../public/icons/moon 40x40.svg';
import Sun from '../../../../public/icons/sun 40x40.svg';
import styles from './ThemeSwitcher.module.scss';

export default function ThemeSwitcher() {
    const { theme, toogleTheme } = useTheme();

    return (
        <button type="button" className={styles.but} onClick={toogleTheme}>
            {theme === Theme.DARK ? <Moon /> : <Sun />}
        </button>
    );
}

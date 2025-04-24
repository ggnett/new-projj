import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Theme } from './providers/theme/ThemeContext';
import { useTheme } from './providers/theme/useTheme';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';

import styles from './styles/index.scss';

export default function App() {
    const { theme} = useTheme();

    // dlia raboti stilei v classnames
    const curentTheme = theme === Theme.DARK ? styles.dark : styles.normal;

    return (
        <div className={cn(styles.app, curentTheme)}>
            <NavBar />
            <AppRouter />
        </div>
    );
}

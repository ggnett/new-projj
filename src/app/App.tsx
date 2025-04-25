import { Link } from 'react-router-dom';
import cn from 'classnames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

import { Suspense } from 'react';
import styles from './styles/index.scss';
import { useTheme } from './providers/theme/useTheme';
import { Theme } from './providers/theme/ThemeContext';

export default function App() {
    const { theme } = useTheme();

    // dlia raboti stilei v classnames
    const curentTheme = theme === Theme.DARK ? styles.dark : styles.normal;

    return (
        <div className={cn(styles.app, curentTheme)}>
            <Suspense fallback="">
                <NavBar />
                <div className={styles.content}>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

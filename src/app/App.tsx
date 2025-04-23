import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import cn from 'classnames';
import { Theme } from './providers/theme/ThemeContext';
import { useTheme } from './providers/theme/useTheme';
import MainPageL from '../pages/MainPage/MainPage.lazy';
import AboutPageL from 'pages/AboutPage/AboutPage.lazy';
import { Loader } from 'shared/Loader';

import styles from './styles/index.scss';

export default function App() {
    const { theme, toogleTheme } = useTheme();

    // dlia raboti stilei v classnames
    const curentTheme = theme === Theme.DARK ? styles.dark : styles.normal;

    return (
        <div className={cn(styles.app, curentTheme)}>
            <button onClick={toogleTheme}>theme</button>
            <Link to="/">MAIN</Link>
            <Link to="/about">ABOUT</Link>
            <React.Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<MainPageL />} />
                    <Route path="/about" element={<AboutPageL />} />
                </Routes>
            </React.Suspense>
        </div>
    );
}

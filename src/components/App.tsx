import { Link, Route, Routes } from 'react-router-dom';
import AboutPageL from './pages/AboutPage/AboutPage.lazy';
import MainPageL from './pages/MainPage/MainPage.lazy';
import React from 'react';
import Loader1 from './Loader1';
import cn from 'classnames';
import { Theme } from '../theme/ThemeContext';
import { useTheme } from '../theme/useTheme';

import styles from '../styles/index.scss';

export default function App() {

    const {theme, toogleTheme} = useTheme()


// dlia raboti stilei v classnames
    const curentTheme = theme === Theme.DARK ? styles.dark : styles.normal;

    return (
        <div className={cn(styles.app, curentTheme)}>
            <button onClick={toogleTheme}>theme</button>
            <Link to="/">MAIN</Link>
            <Link to="/about">ABOUT</Link>
            <React.Suspense fallback={<Loader1 />}>
                <Routes>
                    <Route path="/" element={<MainPageL />} />
                    <Route path="/about" element={<AboutPageL />} />
                </Routes>
            </React.Suspense>
        </div>
    );
}

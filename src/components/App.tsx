import { Link, Route, Routes } from 'react-router-dom';
import AboutPageL from './pages/AboutPage/AboutPage.lazy';
import MainPageL from './pages/MainPage/MainPage.lazy';
import React from 'react';
import Loader1 from './Loader1';

export default function App() {
    return (
        <>
            <Link to="/">MAIN</Link>
            <Link to="/about">ABOUT</Link>
            <React.Suspense fallback={<Loader1 />}>
                <Routes>
                    <Route path="/" element={<MainPageL />} />
                    <Route
                        path="/about"
                        element={<AboutPageL />}
                    />
                </Routes>
            </React.Suspense>
        </>
    );
}

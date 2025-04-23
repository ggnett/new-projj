import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'shared/Loader';
import { routeConfig } from '../routerConfig/routerConfig';

export default function AppRouter() {
    return (
        <React.Suspense fallback={<Loader />}>
            <Routes>
                {Object.values(routeConfig).map((item) => 
                    <Route key={item.path} element={item.element} path={item.path} />
                )}
            </Routes>
        </React.Suspense>
    );
}

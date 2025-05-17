/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import React, { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'shared/ui/Loader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { routeConfig } from '../routerConfig/routerConfig';

import styles from '../../../styles/index.scss';

export default function AppRouter() {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(
        () =>
            Object.values(routeConfig).filter((route) => {
                if (route.authOnly && !isAuth) {
                    return false;
                }
                return true;
            }),
        [isAuth]
    );

    return (
        <div className={styles.pageWrapper}>
            <React.Suspense fallback={<Loader />}>
                <Routes>
                    {routes.map((item) => (
                        <Route key={item.path} element={item.element} path={item.path} />
                    ))}
                </Routes>
            </React.Suspense>
        </div>
    );
}

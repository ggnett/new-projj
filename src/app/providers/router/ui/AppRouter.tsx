/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import React, { useCallback, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'shared/ui/Loader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { AppRoutes, AppRoutesProps, routeConfig } from '../routerConfig/routerConfig';

import styles from '../../../styles/index.scss';
import { RequireAuth } from './RequireAuth';

export default function AppRouter() {
    // const isAuth = useSelector(getUserAuthData);

    // const routes = useMemo(
    //     () =>
    //         Object.values(routeConfig).filter((route) => {
    //             if (route.authOnly && !isAuth) {
    //                 return false;
    //             }
    //             return true;
    //         }),
    //     [isAuth]
    // );

    const renderWithWrapper = useCallback(
        (item:any) => (
            <Route key={item.path} element={item.authOnly ? <RequireAuth>{item.element}</RequireAuth> : item.element} path={item.path} />
        ),
        []
    );

    return (
        <div className={styles.pageWrapper}>
            <React.Suspense fallback={<Loader />}>
                <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
            </React.Suspense>
        </div>
    );
}

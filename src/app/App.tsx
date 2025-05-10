/* eslint-disable comma-dangle */
/* eslint-disable i18next/no-literal-string */
import cn from 'classnames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import styles from './styles/index.scss';
import { useTheme } from './providers/theme/useTheme';

export default function App() {
    const { theme } = useTheme();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={cn(styles.app, styles[theme])}>
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

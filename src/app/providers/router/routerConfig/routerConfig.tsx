import App from 'app/App';
import AboutPageLazy from 'pages/AboutPage/AboutPage.lazy';
import MainPageLazy from 'pages/MainPage/MainPage.lazy';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    // ERROR = 'error'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    // [AppRoutes.ERROR]: '*'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPageLazy />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPageLazy />,
    },
};

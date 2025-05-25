import { RoutePath } from 'app/providers/router/routerConfig/routerConfig';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import Main from '../../../../public/icons/mainIcon32x32.svg';
import About from '../../../../public/icons/listIcon32x32.svg';

export interface SideBarItemType {
    path: string,
    text:string,
    icon:React.FunctionComponent<React.SVGAttributes<SVGElement>>,
    authOnly?:boolean
}

export const SideBarItemsList: SideBarItemType[]= [
    {
        path: RoutePath.main,
        icon: Main,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        icon: About,
        text: 'О сайте',
    },
    {
        path: RoutePath.profile,
        icon: About,
        text: 'Профиль',
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        icon: About,
        text: 'Статьи',
        authOnly: true,
    },
];

import React, { memo } from 'react';
import AppLink, { themes } from 'shared/ui/AppLink/AppLink';
import { SideBarItemType } from 'widgets/SideBar/model/items';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import styles from './SideBarItem.module.scss';

interface props {
    item?: SideBarItemType;
    collapsed: boolean;
}

const SideBarItem = memo((props: props) => {
    const { item, collapsed } = props;

    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink to={item.path} theme={themes.PRIMARY}>
            <item.icon />
            <span className={cn(styles.link, { [styles.collapsed]: collapsed })}>{t(item.text)}</span>
        </AppLink>
    );
});

export default SideBarItem;

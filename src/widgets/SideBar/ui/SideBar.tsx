/* eslint-disable dot-notation */
/* eslint-disable i18next/no-literal-string */
import { memo, useMemo, useState } from 'react';
import cn from 'classnames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher/ui/LangSwitcher';
import AppLink, { themes } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'app/providers/router/routerConfig/routerConfig';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { SideBarItemsList } from '../model/items';
import SideBarItem from './SideBarItem/SideBarItem';

import styles from './SideBar.module.scss';

const SideBar = memo(() => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const userID = useSelector((state: StateSchema) => state.user?.authData?.id);

    const toogle = () => {
        setCollapsed((prev) => !prev);
    };

    SideBarItemsList[2].path = `${RoutePath.profile}/${userID}`;

    const itemsList = useMemo(() => SideBarItemsList.map((item) => <SideBarItem key={item.path} item={item} collapsed={collapsed} />), [collapsed]);

    return (
        <div data-testid="sidebar" className={cn(styles.sidebar, { [styles.collapsed]: collapsed })}>
            <div className={styles.links}>{itemsList}</div>
            <button className={styles.tglButton} data-testid="toggleButton" type="button" onClick={toogle}>
                {collapsed ? '>' : '<'}
            </button>
            <div className={cn(styles.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
});

export default SideBar;

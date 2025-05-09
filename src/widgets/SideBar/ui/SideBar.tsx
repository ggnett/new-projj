/* eslint-disable dot-notation */
/* eslint-disable i18next/no-literal-string */
import { useState } from 'react';
import cn from 'classnames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher/ui/LangSwitcher';
import AppLink, { themes } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

import Main from '../../../../public/icons/mainIcon32x32.svg';
import About from '../../../../public/icons/listIcon32x32.svg';

import styles from './SideBar.module.scss';

export default function SideBar() {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const toogle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div data-testid="sidebar" className={cn(styles.sidebar, { [styles.collapsed]: collapsed })}>
            <div className={styles.links}>
                <AppLink to="/" theme={themes.SECONDARY}>
                    <Main />
                    <span className={cn(styles.link)}>{t('Главная')}</span>
                </AppLink>
                <AppLink to="/about" theme={themes.PRIMARY}>
                    <About />
                    <span className={cn(styles.link)}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <button className={styles.tglButton} data-testid="toggleButton" type="button" onClick={toogle}>
                {collapsed ? '>' : '<'}
            </button>
            <div className={cn(styles.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
}

import { useState } from 'react';
import cn from 'classnames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher/ui/LangSwitcher';

import styles from './SideBar.module.scss';

export default function SideBar() {
    const [collapsed, setCollapsed] = useState(false);

    const toogle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={cn(styles.sidebar, { [styles.collapsed]: collapsed })}>
            <button type="button" onClick={toogle}>
                toggle
            </button>
            <div className={cn(styles.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
}

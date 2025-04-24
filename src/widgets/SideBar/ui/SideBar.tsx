import { useState } from 'react';
import cn from 'classnames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import styles from './SideBar.module.scss';
import LangSwitcher from 'widgets/LangSwitcher/ui/LangSwitcher';

export default function SideBar() {
    const [collapsed, setCollapsed] = useState(false);

    const toogle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={cn(styles.sidebar, { [styles.collapsed]: collapsed })}>
            <button onClick={toogle}>toogle</button>
            <div className={cn(styles.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
}

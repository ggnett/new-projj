import React, { FC } from 'react';
import { Link, LinkProps, NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './AppLink.module.scss';

export const enum themes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface props extends LinkProps {
    children?: React.ReactNode;
    theme: themes;
}

const AppLink: FC<props> = (props) => {
    const { children, to, theme } = props;

    return (
        <NavLink
            className={cn(styles.links, styles[theme])}
            to={to}
            style={({ isActive }) => ({ color: isActive ? 'var(--inverted-secondary-color)' : '', fill: isActive ? 'var(--inverted-secondary-color)' : '' })}
        >
            {children}
        </NavLink>
    );
};

export default AppLink;

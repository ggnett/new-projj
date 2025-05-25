/* eslint-disable object-curly-newline */
import React, { FC } from 'react';
import { Link, LinkProps, NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './AppLink.module.scss';

export const enum themes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface props extends LinkProps {
    classNames?: string;
    children?: React.ReactNode;
    theme?: themes;
}

const AppLink: FC<props> = (props) => {
    const { children, to, theme, classNames } = props;

    return (
        <NavLink
            className={cn(styles.links, styles[theme], classNames)}
            to={to}
            style={({ isActive }) => ({
                color: isActive ? 'var(--inverted-secondary-color)' : '',
                fill: isActive ? 'var(--inverted-secondary-color)' : '',
            })}
        >
            {children}
        </NavLink>
    );
};

export default AppLink;

import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
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
        <Link className={cn(styles.links, styles[theme])} to={to}>
            {children}
        </Link>
    );
};

export default AppLink;

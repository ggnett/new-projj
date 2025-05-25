/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import React, { CSSProperties, useMemo } from 'react';
import cn from 'classnames';
import styles from './Avatar.module.scss';

interface props {
    classNames?: string;
    avatar?: string;
    alt?: string;
    size?: number;
}

export default function Avatar({ classNames='', avatar, alt, size }: props) {
    const styls = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size]
    );

    return <img style={styls} className={cn(styles.avatar, classNames)} src={avatar} alt={alt} />;
}

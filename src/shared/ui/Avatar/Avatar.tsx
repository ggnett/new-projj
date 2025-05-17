import React, { CSSProperties, useMemo } from 'react';
import styles from './Avatar.module.scss';

interface props {
    avatar: string;
    alt: string;
    size?: number;
}

export default function Avatar({ avatar, alt, size }: props) {
    const styls = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return <img style={styls} className={styles.avatar} src={avatar} alt={alt} />;
}

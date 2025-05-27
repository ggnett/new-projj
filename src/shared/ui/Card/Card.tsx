/* eslint-disable react/jsx-props-no-spreading */
import React, { HTMLAttributes, ReactNode } from 'react';

import styles from './Card.module.scss';

interface props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export default function Card({ children, ...otherProps }: props) {
    return <div className={styles.card} {...otherProps}>{children}</div>;
}

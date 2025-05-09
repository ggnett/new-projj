/* eslint-disable object-curly-newline */
import React, { FC } from 'react';
import cn from 'classnames';
import { useTheme } from 'app/providers/theme/useTheme';
import styles from './Modal.module.scss';

interface props {
    children: React.ReactNode;
    themes?: string;
    isOpen?: boolean;
    setOpen?: () => void;
}

export default function Modal(props: props) {
    const { children, themes, isOpen, setOpen } = props;

    const { theme } = useTheme();

    return (
        <div className={cn(styles[themes], styles.modal, !isOpen && styles.hideModal, styles.theme)}>
            <div className={cn(styles.overlay, !isOpen && styles.hideOverlay)} onClick={setOpen}>
                <div className={styles.content} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
}

import React, { MutableRefObject, ReactNode, useRef } from 'react';
import cn from 'classnames';

import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import styles from './Page.module.scss';

interface props {
    classNames?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export default function Page({ children, classNames, onScrollEnd }: props) {
    const wrapperRef = useRef(null) as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef(null) as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <div ref={wrapperRef} className={cn(styles.page, classNames)}>
            {children}
            <div ref={triggerRef} />
        </div>
    );
}

/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
import React, { MutableRefObject, ReactNode, useRef, UIEvent, useEffect } from 'react';
import cn from 'classnames';

import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUIScrollByPath, uiActions } from 'features/UI';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import styles from './Page.module.scss';

interface props {
    classNames?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export default function Page({ children, classNames, onScrollEnd }: props) {
    const wrapperRef = useRef(null) as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef(null) as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const location = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, location.pathname));

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    }, [scrollPosition]);

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            uiActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: location.pathname,
            })
        );
    }, 500);

    return (
        <div onScroll={onScroll} ref={wrapperRef} className={cn(styles.page, classNames)}>
            {children}
            <div ref={triggerRef} />
        </div>
    );
}

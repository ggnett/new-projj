/* eslint-disable react/no-array-index-key */
import { ArticleView } from 'entities/Article/model/consts/consts';
import React from 'react';
import cn from 'classnames';
import ListIcon from '../../../../../public/icons/list-24-24.svg';
import TiledIcon from '../../../../../public/icons/tiled-24-24.svg';

import styles from './ArticleViewSelector.module.scss';

interface props {
    view: ArticleView;
    onViewClick?: (newView: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: <TiledIcon />,
    },
    {
        view: ArticleView.BIG,
        icon: <ListIcon />,
    },
];

export default function ArticleViewSelector({ view, onViewClick }: props) {
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={styles.root}>
            {viewTypes.map((item, index) => (
                <button key={index} className={cn(styles.btn, { [styles.selected]: item.view === view })} onClick={onClick(item.view)} type="button">
                    {item.icon}
                </button>
            ))}
        </div>
    );
}

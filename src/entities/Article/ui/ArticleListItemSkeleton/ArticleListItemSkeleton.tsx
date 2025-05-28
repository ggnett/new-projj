/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/jsx-props-no-spreading */
import { ArticleBlockType, ArticleView } from 'entities/Article/model/consts/consts';
import { Article, ArticleTextBlock } from 'entities/Article/model/types/article';
import React, { useCallback } from 'react';
import { Text } from 'shared/ui/Text';
import Card from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useAppDispatch/useHover/useHover';
import Avatar from 'shared/ui/Avatar/Avatar';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/router/routerConfig/routerConfig';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import Eye from '../../../../../public/icons/eye.svg';

import styles from './ArticleListItemSkeleton.module.scss';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface props {
    view: ArticleView;
}

export default function ArticleListItemSkeleton({ view }: props) {
    if (view === ArticleView.BIG) {
        return (
            <div className={styles[view]}>
                <Card>
                    <div className={styles.header}>
                        <Skeleton border="50%" width={30} height={30} />
                        <Skeleton width={150} height={16} className={styles.userName} />
                        <Skeleton width={150} height={16} className={styles.date} />
                    </div>
                    <Skeleton width={250} height={24} className={styles.title} />
                    <Skeleton height={200} className={styles.img} />
                    <div className={styles.footer}>
                        <Skeleton width={700} height={36} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={styles[view]}>
            <Card>
                <div className={styles.imageWrapper}>
                    <Skeleton width={200} height={200} className={styles.img} />
                </div>
                <div className={styles.infoWrapper}>
                    <Skeleton width={130} height={16} className={styles.types} />
                </div>
                <Skeleton width={150} height={16} className={styles.title} />
            </Card>
        </div>
    );
}

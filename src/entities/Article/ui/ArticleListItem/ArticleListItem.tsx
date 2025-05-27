import { ArticleView } from 'entities/Article/model/consts/consts';
import { Article } from 'entities/Article/model/types/article';
import React from 'react';
import { Text } from 'shared/ui/Text';
import Eye from '../../../../../public/icons/eye.svg';

import styles from './ArticleListItem.module.scss';

interface props {
    article: Article;
    view: ArticleView;
}

export default function ArticleListItem({ article, view }: props) {
    if (view === ArticleView.BIG) {
        return <div className={styles.view}>{article.title}</div>;
    }

    const test= 'small';

    return (
        <div className={styles[test]}>
            <div className={styles.card}>
                <div className={styles.imageWrapper}>
                    <img src={article.img} alt={article.title} className={styles.img} />
                    <Text text={article.createdAt} classNames={styles.date} />
                </div>
                <div className={styles.infoWrapper}>
                    <Text text={article.type.join(', ')} classNames={styles.types} />
                    <Text text={String(article.views)} classNames={styles.views} />
                    <Eye className={styles.viewImg} />
                </div>
                <Text text={article.title} classNames={styles.title} />
            </div>
        </div>
    );
}

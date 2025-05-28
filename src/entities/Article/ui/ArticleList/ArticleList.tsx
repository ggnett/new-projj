/* eslint-disable react/no-array-index-key */
import { ArticleView } from 'entities/Article/model/consts/consts';
import { Article } from 'entities/Article/model/types/article';
import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItemSkeleton/ArticleListItemSkeleton';

import styles from './ArticleList.module.scss';

interface props {
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export default function ArticleList({ articles, isLoading, view = ArticleView.SMALL }: props) {
    const renderArticle = (article: Article) => <ArticleListItem key={article.id} article={article} view={view} />;

    if (isLoading) {
        return (
            <div className={styles.root}>
                {new Array(view === ArticleView.SMALL ? 9 : 6).fill(0).map((item, index) => (
                    <ArticleListItemSkeleton key={index} view={view} />
                ))}
            </div>
        );
    }

    return <div className={styles.root}>{articles.length > 0 ? articles.map(renderArticle) : null}</div>;
}

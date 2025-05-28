import { ArticleView } from 'entities/Article/model/consts/consts';
import { Article } from 'entities/Article/model/types/article';
import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem';

interface props {
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export default function ArticleList({ articles, isLoading, view = ArticleView.SMALL }: props) {
    const renderArticle = (article: Article) => <ArticleListItem key={article.id} article={article} view={ArticleView.BIG} />;

    return <div>{articles.length > 0 ? articles.map(renderArticle) : null}</div>;
}

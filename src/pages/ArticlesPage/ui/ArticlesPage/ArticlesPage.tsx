/* eslint-disable i18next/no-literal-string */
import { Article, ArticleList, ArticleViewSelector } from 'entities/Article';
import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { ArticleView } from 'entities/Article/model/consts/consts';
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticle/fetchArticlesList';
import { useSelector } from 'react-redux';
import { getArticlesPageIsLoading, getArticlesPageView } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import styles from './ArticlesPage.module.scss';

const reducersList = {
    articlesPage: articlesPageReducer,
};

export default function ArticlesPage() {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articlesList = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    const onChangeView = (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    };

    useEffect(() => {
        dispatch(fetchArticlesList({ replace: false }));
        dispatch(articlesPageActions.initState());
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmout>
            <div>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList articles={articlesList} view={view} isLoading={isLoading} />
            </div>
        </DynamicModuleLoader>
    );
}

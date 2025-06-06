/* eslint-disable i18next/no-literal-string */
import { Article, ArticleList, ArticleViewSelector } from 'entities/Article';
import React, { useCallback, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { ArticleView } from 'entities/Article/model/consts/consts';
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticle/fetchArticlesList';
import { useSelector } from 'react-redux';
import {
    getArticlesPageHasMore,
    getArticlesPageInited,
    getArticlesPageIsLoading,
    getArticlesPageNum,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { Page } from 'shared/ui/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
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
    const page = useSelector(getArticlesPageNum);
    const hasMore = useSelector(getArticlesPageHasMore);
    const inited = useSelector(getArticlesPageInited);

    const onChangeView = (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    };

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useEffect(() => {
        if (!inited) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({ page: 1 }));
        }
    }, [dispatch, inited]);
    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmout={false}>
            <Page onScrollEnd={onLoadNextPart}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList articles={articlesList} view={view} isLoading={isLoading} />
            </Page>
        </DynamicModuleLoader>
    );
}

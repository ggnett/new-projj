/* eslint-disable i18next/no-literal-string */
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';

import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleComments } from 'pages/ArticlesDetailsPage/model/slices/articleDetailsCommentsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } from 'pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useSelector } from 'react-redux';
import { getArticleCommentsError, getArticleCommentsIsloading } from 'pages/ArticlesDetailsPage/model/selectors/comments';
import { AddCommentFrom } from 'features/addCommentForm';
import { addCommentForArticle } from 'pages/ArticlesDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { RoutePath } from 'app/providers/router/routerConfig/routerConfig';
import { Page } from 'shared/ui/Page';
import styles from './ArticlesDetailsPage.module.scss';

const reducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

export default function ArticlesDetailsPage() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsloading);
    const error = useSelector(getArticleCommentsError);

    const onSendComment = (text: string) => {
        dispatch(addCommentForArticle(text));
    };

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [dispatch, id]);

    if (!id) {
        return <Page>{t('statia ne naidena')}</Page>;
    }

    if (error) {
        return <Text title={t('oshibka zaprosa')} />;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmout>
            <Page>
                <button onClick={onBackToList} className={styles.btn} type="button">
                    {t('назад к списку')}
                </button>
                <div>
                    <ArticleDetails id={id} />
                    <Text classNames={styles.commentTitle} title={t('Коментарии')} />
                    <AddCommentFrom onSendComment={onSendComment} />
                    <CommentList isLoading={isLoading} comments={comments} />
                </div>
            </Page>
        </DynamicModuleLoader>
    );
}

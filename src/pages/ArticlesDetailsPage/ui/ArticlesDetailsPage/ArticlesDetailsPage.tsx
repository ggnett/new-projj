/* eslint-disable i18next/no-literal-string */
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';

import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleComments } from 'pages/ArticlesDetailsPage/model/slices/articleDetailsCommentsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } from 'pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useSelector } from 'react-redux';
import { getArticleCommentsError, getArticleCommentsIsloading } from 'pages/ArticlesDetailsPage/model/selectors/comments';
import styles from './ArticlesDetailsPage.module.scss';

const reducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

export default function ArticlesDetailsPage() {
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsloading);
    const error = useSelector(getArticleCommentsError);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [dispatch, id]);

    if (!id) {
        return <div>{t('statia ne naidena')}</div>;
    }

    if (error) {
        return <Text title={t('oshibka zaprosa')} />;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmout>
            <div>
                <ArticleDetails id={id} />
                <Text classNames={styles.commentTitle} title={t('Коментарии')} />
                <CommentList isLoading={isLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    );
}

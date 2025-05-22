/* eslint-disable i18next/no-literal-string */
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from 'entities/Article/model/selectors/articleDetails';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from 'entities/Article/model/slice/aticleDetailsSlice';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { Text } from 'shared/ui/Text';
import { TextAlign } from 'shared/ui/Text/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import styles from './ArticleDetails.module.scss';

interface props {
    id: string;
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export default function ArticleDetails({ id }: props) {
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    // const isLoading = true;

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton className={styles.avatar} width={200} height={200} border="50%" />
                <Skeleton className={styles.title} width={300} height={32} />
                <Skeleton className={styles.skeleton} width={600} height={24} />
                <Skeleton className={styles.skeleton} width="100%" height={200} />
                <Skeleton className={styles.skeleton} width="100%" height={200} />
            </div>
        );
    } else if (error) {
        content = <Text title="proizoshla oshibka" align={TextAlign.CENTER} />;
    } else {
        content = <div>ArticleDetails</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmout>
            <div className={styles.articleDetails}>{content}</div>
        </DynamicModuleLoader>
    );
}

/* eslint-disable indent */
/* eslint-disable i18next/no-literal-string */
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from 'entities/Article/model/selectors/articleDetails';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from 'entities/Article/model/slice/aticleDetailsSlice';
import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text';
import { TextAlign, TextSize } from 'shared/ui/Text/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import Avatar from 'shared/ui/Avatar/Avatar';
import { ArticleBlock } from 'entities/Article/model/types/article';
import { ArticleBlockType } from 'entities/Article/model/consts/consts';
import EyeIcon from '../../../../../public/icons/eye.svg';
import CalendarIcon from '../../../../../public/icons/calendar.svg';

import styles from './ArticleDetails.module.scss';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

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

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return <ArticleCodeBlockComponent block={block} />;
            case ArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent />;
            case ArticleBlockType.TEXT:
                return <ArticleTextBlockComponent block={block} />;
            default:
                return null;
        }
    }, []);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={styles.avatar} width={200} height={200} border="50%" />
                <Skeleton className={styles.title} width={300} height={32} />
                <Skeleton className={styles.skeleton} width={600} height={24} />
                <Skeleton className={styles.skeleton} width="100%" height={200} />
                <Skeleton className={styles.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = <Text title="proizoshla oshibka" align={TextAlign.CENTER} />;
    } else {
        content = (
            <>
                <Avatar size={200} avatar={article?.img} alt="avatar" classNames={styles.avatar} />
                <Text classNames={styles.title} size={TextSize.L} title={article?.title} text={article?.subtitle} />
                <div className={styles.desc}>
                    <EyeIcon className={styles.eye} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={styles.desc}>
                    <CalendarIcon />
                    <Text text={String(article?.createdAt)} />
                </div>
                {article?.blocks.map((item) => renderBlock(item))}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmout>
            <div className={styles.articleDetails}>{content}</div>
        </DynamicModuleLoader>
    );
}

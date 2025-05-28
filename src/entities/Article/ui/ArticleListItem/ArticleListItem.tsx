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
import Eye from '../../../../../public/icons/eye.svg';

import styles from './ArticleListItem.module.scss';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface props {
    article: Article;
    view: ArticleView;
}

export default function ArticleListItem({ article, view }: props) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
    const { t } = useTranslation();
    const navigate = useNavigate();
    // hook slejenia za hover
    const [isHover, bindHover] = useHover();

    const onOpenArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}/${article.id}`);
    }, [article.id, navigate]);

    if (view === ArticleView.BIG) {
        return (
            <div className={styles[view]}>
                <Card>
                    <div className={styles.header}>
                        <Avatar size={30} avatar={article.user?.avatar} alt="avatar" />
                        <Text text={article.user?.username} classNames={styles.userName} />
                        <Text text={article.createdAt} classNames={styles.date} />
                    </div>
                    <Text title={article.title} classNames={styles.title} />
                    <Text text={article.type.join('/ ')} classNames={styles.types} />
                    <img src={article.img} alt={article.title} className={styles.img} />
                    {textBlock && <ArticleTextBlockComponent block={textBlock} classNames={styles.textBlock} />}
                    <div className={styles.footer}>
                        <button onClick={onOpenArticle} className={styles.btn} type="button">
                            {t('читать дальше...')}
                        </button>
                        <Text text={String(article.views)} classNames={styles.views} />
                        <Eye className={styles.viewImg} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div {...bindHover} className={styles[view]}>
            <Card>
                <div className={styles.imageWrapper}>
                    <img src={article.img} alt={article.title} className={styles.img} />
                    <Text text={article.createdAt} classNames={styles.date} />
                </div>
                <div className={styles.infoWrapper}>
                    <Text text={article.type.join('/ ')} classNames={styles.types} />
                    <Text text={String(article.views)} classNames={styles.views} />
                    <Eye className={styles.viewImg} />
                </div>
                <Text text={article.title} classNames={styles.title} />
            </Card>
        </div>
    );
}

// 39 27

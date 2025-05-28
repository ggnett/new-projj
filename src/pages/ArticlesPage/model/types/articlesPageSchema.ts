import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleView,
} from 'entities/Article';
import { ArticleType } from 'entities/Article/model/consts/consts';
// import { SortOrder } from 'shared/types/sort';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    // Тип отображения: плитка или блок
    view: ArticleView;
    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    // order: SortOrder;
    // sort: ArticleSortField;
    search: string;
    type: ArticleType;

    _inited?: boolean;
}

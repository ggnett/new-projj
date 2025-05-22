/* eslint-disable i18next/no-literal-string */
import { ArticleDetails } from 'entities/Article';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export default function ArticlesDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();
    if (!id) {
        return <div>{t('statia ne naidena')}</div>;
    }

    return (
        <div>
            <ArticleDetails id={id} />
        </div>
    );
}

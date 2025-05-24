/* eslint-disable i18next/no-literal-string */
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import React from 'react';
import { Text } from 'shared/ui/Text';
import { TextAlign, TextSize } from 'shared/ui/Text/ui/Text';

import styles from './ArticleImageBlockComponent.module.scss';

interface props {
    block: ArticleImageBlock;
}

export default function ArticleImageBlockComponent({ block }: props) {
    return (
        <div className={styles.root}>
            {block?.src && <img className={styles.image} src={block.src} alt={block.title} />}
            {block?.title && <Text size={TextSize.S} title={block.title} align={TextAlign.CENTER} />}
        </div>
    );
}

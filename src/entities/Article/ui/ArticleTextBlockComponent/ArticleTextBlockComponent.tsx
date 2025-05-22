/* eslint-disable react/no-array-index-key */
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import React from 'react';
import { Text } from 'shared/ui/Text';

import styles from './ArticleTextBlockComponent.module.scss';

interface props {
    block: ArticleTextBlock;
}

export default function ArticleTextBlockComponent({ block }: props) {
    return (
        <div className={styles.root}>
            {block.title && <Text classNames={styles.title} title={block.title} />}
            {block.paragraphs.map((item, index) => (
                <Text key={index} classNames={styles.paragraph} text={item} />
            ))}
        </div>
    );
}

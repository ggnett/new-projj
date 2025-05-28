/* eslint-disable react/no-array-index-key */
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import React from 'react';
import { Text } from 'shared/ui/Text';
import cn from 'classnames';

import styles from './ArticleTextBlockComponent.module.scss';

interface props {
    classNames?: string;
    block: ArticleTextBlock;
}

export default function ArticleTextBlockComponent({ classNames, block }: props) {
    return (
        <div className={styles.root}>
            {block.title && <Text classNames={styles.title} title={block.title} />}
            {block.paragraphs.map((item, index) => (
                <Text key={index} classNames={cn(styles.paragraph, classNames)} text={item} />
            ))}
        </div>
    );
}

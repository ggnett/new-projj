/* eslint-disable i18next/no-literal-string */
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import React from 'react';

import styles from './ArticleCodeBlockComponent.module.scss';

interface props {
    block: ArticleCodeBlock;
}

export default function ArticleCodeBlockComponent({ block }: props) {
    return (
        <pre className={styles.code}>
            <button className={styles.copyBtn} type="button">copy</button>
            <code>{block.code}</code>
        </pre>
    );
}

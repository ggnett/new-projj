/* eslint-disable i18next/no-literal-string */
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import React, { useCallback } from 'react';

import styles from './ArticleCodeBlockComponent.module.scss';

interface props {
    block: ArticleCodeBlock;
}

export default function ArticleCodeBlockComponent({ block }: props) {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(block.code);
    }, [block.code]);

    return (
        <pre className={styles.code}>
            <button onClick={onCopy} className={styles.copyBtn} type="button">
                copy
            </button>
            <code>{block.code}</code>
        </pre>
    );
}

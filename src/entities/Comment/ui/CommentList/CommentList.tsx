import { Comment } from 'entities/Comment/model/types/comment';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import CommentCart from '../CommentCart/CommentCart';

import styles from './CommentList.module.scss';

interface props {
    comments?: Comment[];
    isLoading?: boolean;
}

export default function CommentList({ comments, isLoading }: props) {
    const { t } = useTranslation();

    return <div>{comments?.length ? comments.map((item) => <CommentCart classNames={styles.comment} comment={item} />) : <Text text={t('комментарии отсутствуют')} />}</div>;
}

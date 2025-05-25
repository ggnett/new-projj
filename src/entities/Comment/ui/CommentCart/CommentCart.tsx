/* eslint-disable i18next/no-literal-string */
import { Comment } from 'entities/Comment/model/types/comment';
import React from 'react';
import cn from 'classnames';
import Avatar from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text';

import { Loader } from 'shared/ui/Loader';
import AppLink from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/router/routerConfig/routerConfig';
import styles from './CommentCart.module.scss';

interface props {
    classNames?: string;
    comment: Comment;
    isLoading?: boolean;
}

export default function CommentCart({ classNames, comment, isLoading }: props) {
    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className={cn(classNames, styles.commentCart)}>
            <AppLink to={`${RoutePath.profile}/${comment.user.id}`} classNames={styles.header}>
                {comment.user.avatar ? <Avatar size={30} avatar={comment.user.avatar} /> : null}
                <Text classNames={styles.userName} title={comment.user.username} />
            </AppLink>
            <Text classNames={styles.text} text={comment.text} />
        </div>
    );
}

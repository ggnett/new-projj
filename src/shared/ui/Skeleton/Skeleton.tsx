/* eslint-disable object-curly-newline */
import { CSSProperties, memo } from 'react';
import cn from 'classnames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const { className, height, width, border } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return <div className={cn(cls.skeleton, [className])} style={styles} />;
});

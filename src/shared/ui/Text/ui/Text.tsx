/* eslint-disable object-curly-newline */
import { memo } from 'react';
import cn from 'classnames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    classNames?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;

    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const { classNames, text, title, theme = TextTheme.PRIMARY, align = TextAlign.LEFT, size = TextSize.M, 'data-testid': dataTestId = 'Text' } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div className={cn(cls[theme], cls[align], cls[size])}>
            {title && (
                <HeaderTag className={cn(cls.title, classNames)} data-testid={`${dataTestId}.Header`}>
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p className={cn(cls.text, classNames)} data-testid={`${dataTestId}.Paragraph`}>
                    {text}
                </p>
            )}
        </div>
    );
});

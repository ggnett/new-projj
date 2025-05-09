/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import cn from 'classnames';
import cls from './Input.module.scss';

// С помощью Omit забираем из типа все пропсы, кроме указанных
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
    cl?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

// memo позволяет избежать лишних перерисовок
export const Input = memo((props: InputProps) => {
    const { cl, value, onChange, type = 'text', placeholder, autofocus, readonly, ...otherProps } = props;
    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={cls.inputWrapper}>
            {placeholder && <div className={cls.placeholder}>{`${placeholder}`}</div>}
            <input ref={ref} type={type} value={value} className={cn(cls.input, cl)} onChange={onChangeHandler} readOnly={readonly} {...otherProps} />
        </div>
    );
});

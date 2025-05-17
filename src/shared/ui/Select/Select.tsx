/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
import React, { ChangeEvent, useMemo } from 'react';
import styles from './Select.module.scss';

export interface SelectOptions {
    value: string;
    content: string;
}

interface props {
    label?: string;
    options?: SelectOptions[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean
}

export default function Select({ label, options, value, onChange, readonly }: props) {
    const optionList = useMemo(
        () =>
            options?.map((opt) => (
                <option value={opt.value} key={opt.value}>
                    {opt.content}
                </option>
            )),
        [options]
    );

    const onChangeHundler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={styles.wrapper}>
            {label && <span className={styles.label}>{`${label}>`}</span>}
            <select onChange={onChangeHundler} value={value} className={styles.select} disabled={readonly}>
                {optionList}
            </select>
        </div>
    );
}

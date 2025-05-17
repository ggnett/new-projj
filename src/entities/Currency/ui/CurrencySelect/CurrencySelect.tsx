import { Currency } from 'entities/Currency';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'shared/ui/Select/Select';

interface props {
    value?: Currency;
    onChange?: (value:Currency) => void;
    readonly?: boolean;
}

export default function CurrencySelect({ value, onChange, readonly }: props) {
    const { t } = useTranslation();

    const options = [
        { value: Currency.RUB, content: Currency.RUB },
        { value: Currency.EUR, content: Currency.EUR },
        { value: Currency.USD, content: Currency.USD },
    ];

    return <Select label={t('Валюта')} options={options} value={value} onChange={onChange} readonly={readonly} />;
}

import { Country } from 'entities/Country/model/types/country';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'shared/ui/Select/Select';

interface props {
    value?: Country;
    onChange?: (value:Country) => void;
    readonly?: boolean;
}

export default function ContrySelect({ value, onChange, readonly }: props) {
    const { t } = useTranslation();

    const options = [
        { value: Country.Armenia, content: Country.Armenia },
        { value: Country.Belarus, content: Country.Belarus },
        { value: Country.Kazakhstan, content: Country.Kazakhstan },
        { value: Country.Russia, content: Country.Russia },
        { value: Country.Ukraine, content: Country.Ukraine },
    ];

    return <Select label={t('Страна')} options={options} value={value} onChange={onChange} readonly={readonly} />;
}

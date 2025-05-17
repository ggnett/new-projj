import { Country, Currency } from 'shared/const/common';

export enum ValidateProfileErrors {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
    id?: string,
    first?: string,
    age?: number,
    lastname?: string,
    country?: Country,
    currency?:Currency,
    username?: string,
    city?:string,
    avatar?: string

}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading:boolean;
    error?:string;
    readonly?:boolean;
    validateErrors?: ValidateProfileErrors[];
}

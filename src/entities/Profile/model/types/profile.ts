import { Country, Currency } from 'shared/const/common';

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
}

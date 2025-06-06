import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { NavigateOptions, To, useNavigate } from 'react-router-dom';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import createReduxStore from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export default function StoreProvider({ children, initialState, asyncReducers }: StoreProviderProps) {
    const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);

    return <Provider store={store}>{children}</Provider>;
}

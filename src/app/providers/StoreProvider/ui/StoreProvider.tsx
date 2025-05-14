import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { NavigateOptions, To, useNavigate } from 'react-router-dom';
import createReduxStore from '../config/store';

interface props {
    children: ReactNode;
}

export default function StoreProvider({ children }: props) {
    const navigate = useNavigate();
    const store = createReduxStore();
    return <Provider store={store}>{children}</Provider>;
}

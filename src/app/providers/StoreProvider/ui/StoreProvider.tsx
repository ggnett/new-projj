import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import createReduxStore from '../config/store';

interface props {
    children: ReactNode;
}

const store = createReduxStore();

export default function StoreProvider({ children }: props) {
    return <Provider store={store}>{children}</Provider>;
}

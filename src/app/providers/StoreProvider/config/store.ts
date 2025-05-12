import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { userReducer } from 'entities/User';
// import { loginReducer } from 'features/AuthByUsername';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export default function createReduxStore(
    initialState?:StateSchema,
) {
    const rootRedusers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        // login: loginReducer,
    };

    const reducerManager= createReducerManager(rootRedusers);

    const store = configureStore({
        reducer: reducerManager.reduce,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

// 25 57

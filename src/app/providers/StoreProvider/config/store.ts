import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';

export default function createReduxStore(
    initialState?:StateSchema,
) {
    const rootRedusers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore({
        reducer: rootRedusers,
    });
}

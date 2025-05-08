import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { StateSchema } from './StateSchema';

export default function createReduxStore(
    initialState?:StateSchema,
) {
    return configureStore({
        reducer: {
            counter: counterReducer,
        },
    });
}

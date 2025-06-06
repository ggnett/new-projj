import {
    CombinedState,
    configureStore, DeepPartial, getDefaultMiddleware, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { userReducer } from 'entities/User';
// import { loginReducer } from 'features/AuthByUsername';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';
import { profileReducer } from 'entities/Profile';
import { articleDetailsReducer } from 'entities/Article/model/slice/aticleDetailsSlice';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { uiReducer } from 'features/UI';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export default function createReduxStore(
    initialState?:StateSchema,
    asyncReducers?:ReducersMapObject<StateSchema>,
) {
    const rootRedusers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        profile: profileReducer,
        UI: uiReducer,
        // articlesPage: articlesPageReducer,
        // articleDetails: articleDetailsReducer,
        // login: loginReducer,
    };

    const reducerManager= createReducerManager(rootRedusers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

// Типизация диспатча (для подсветки полей тайпскриптом)
// https://redux-toolkit.js.org/usage/usage-with-typescript
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

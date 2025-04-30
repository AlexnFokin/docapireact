import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducer.manager'
import { $api } from 'shared/api/api'

export function createReduxStore(initialState?: StateSchema) {

    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducers);

  
    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api
                }
            }
        })
    })
    //@ts-expect-error
    store.reducerManager = reducerManager;

    return store;
}


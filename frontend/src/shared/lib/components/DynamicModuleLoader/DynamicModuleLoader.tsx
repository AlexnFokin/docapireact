import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithmanager, StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { FC, PropsWithChildren, useEffect } from "react";
import { useStore } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export type ReducersList = {

    // eslint-disable-next-line no-unused-vars
    [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps extends PropsWithChildren{
    reducers: ReducersList;
    removeAfterUnmount?: boolean
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { 
        reducers, 
        children,
        removeAfterUnmount 
    } = props;
    const store = useStore() as ReduxStoreWithmanager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        })
       
        return () => {
            Object.entries(reducers).forEach(([name]) => {
                if (removeAfterUnmount) {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                }
            })
        };
    }, [dispatch, reducers, removeAfterUnmount, store]);

    return <>{children}</>;
};

export default DynamicModuleLoader;

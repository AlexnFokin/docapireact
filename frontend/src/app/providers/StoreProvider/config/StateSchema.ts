/* eslint-disable no-unused-vars */
import { EnhancedStore, ReducersMapObject, UnknownAction, Reducer } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUserEmail";
import { NavigateOptions, To } from "react-router-dom";



export interface StateSchema {
  user: UserSchema
  loginFrom?: LoginSchema
  profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;  
  reduce: (state: StateSchema, action: UnknownAction) => StateSchema; 
  add: (key: StateSchemaKey, reducer: Reducer) => void; 
  remove: (key: StateSchemaKey) => void;  
}


export interface ReduxStoreWithmanager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg
}
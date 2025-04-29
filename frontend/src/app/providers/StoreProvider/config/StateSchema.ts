import { EnhancedStore, ReducersMapObject, UnknownAction, Reducer } from "@reduxjs/toolkit";
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUserEmail";
import { RegisterSchema } from "features/RegisterByUserEmail";



export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  loginFrom?: LoginSchema
  registerForm?: RegisterSchema
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
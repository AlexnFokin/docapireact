
import { createSlice } from "@reduxjs/toolkit";
import { RegisterSchema } from "../types/register.schema";

const initialState: RegisterSchema = {
    email: '',
    password: '',
    name: ''
}

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {

    }
})

export const {actions: registerActions} = registerSlice;
export const {reducer: registerReducers} = registerSlice
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterSchema } from "../types/register.schema";
import { RegisterByUserEmail } from "../services/registerByUserEmail/registerByUserEmail";

const initialState: RegisterSchema = {
    email: '',
    password: '',
    name: '',
    isLoading: false
}

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(RegisterByUserEmail.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(RegisterByUserEmail.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(RegisterByUserEmail.rejected, (state, action) => {
                state.isLoading = false;
            })
    },
})

export const {actions: registerActions} = registerSlice;
export const {reducer: registerReducers} = registerSlice
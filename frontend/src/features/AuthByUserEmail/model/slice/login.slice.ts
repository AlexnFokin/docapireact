/* eslint-disable @typescript-eslint/no-unused-vars */
import { loginByUserEmail } from "../services/loginByUserEmail/loginByUserEmail";
import { LoginSchema } from "../types/login.schema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: LoginSchema = {
    email: '',
    password: '',
    isLoading: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUserEmail.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUserEmail.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(loginByUserEmail.rejected, (state, action) => {
                state.isLoading = false;
            })
    },
})

export const {actions: loginActions} = loginSlice;
export const {reducer: loginReducer} = loginSlice;

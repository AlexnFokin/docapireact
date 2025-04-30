import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "entities/User";

interface LoginByUserEmailProps {
    email: string
    password: string
}

export const loginByUserEmail = createAsyncThunk<User, LoginByUserEmailProps>(
    'login/loginByUserEmail',
    async (authData, {extra, dispatch}) => {

        try {
            //@ts-expect-error
            const response = await extra.api.post('/auth/login', {
                authData
            })
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            console.log(error)
            return rejectWithValue('error')
        }
    }
)
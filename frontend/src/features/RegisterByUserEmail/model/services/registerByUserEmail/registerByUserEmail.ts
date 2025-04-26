import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "entities/User";

interface RegisterByUserEmailProps {
    email: string
    password: string
    name: string
}

export const RegisterByUserEmail = createAsyncThunk<User, RegisterByUserEmailProps>(
    'login/registerByUserEmail',
    async (authData, thunkApi) => {

        try {
            const response = await axios.post('http://localhost:5000/api/auth/rergister', {
                authData
            })
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue('error')
        }
    }
)
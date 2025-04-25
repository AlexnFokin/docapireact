import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "entities/User";
import { setIsAuth, setUser } from "features/auth/model/slice/auth.slice";
import AuthService from "shared/services/auth.service";

interface RegisterByUserEmailProps {
    email: string
    password: string
    name: string
}

export const RegisterByUserEmail = createAsyncThunk<User, RegisterByUserEmailProps>(
    'register/registerByUserEmail',
    async (data: { name: string; email: string; password: string }, thunkAPI) => {
        try {
            const response = await AuthService.register(data.name, data.email, data.password);
            localStorage.setItem('token', response.data.accessToken);
            thunkAPI.dispatch(setUser(response.data.user));
            thunkAPI.dispatch(setIsAuth(true));
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || 'Registration failed');
        }
    }
)
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { USER_LOCALSTORAGE_KEY } from "shared/const/local.storadge";

interface LoginByUserEmailProps {
    email: string
    password: string
}

export const loginByUserEmail = createAsyncThunk<
    User, 
    LoginByUserEmailProps, 
    ThunkConfig<string>
>(
    'login/loginByUserEmail',
    async (authData, thunkApi) => {

        const {extra, dispatch, rejectWithValue} = thunkApi;
        try {
  
            const response = await extra.api.post<User>('/auth/login', authData)
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (error) {
            console.log(error)
            return rejectWithValue(i18n.t('Incorrect login or password'))
        }
    }
)
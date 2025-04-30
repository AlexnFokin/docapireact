import { classNames } from "shared/lib/classNames/classNames";
import * as cls from './LoginForm.module.scss';
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Input } from "shared/ui/Input/Input";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { loginActions, loginReducer } from "../../model/slice/login.slice";
import { loginByUserEmail } from "../../model/services/loginByUserEmail/loginByUserEmail";
import { getLoginUserEmail } from "../../model/selectors/getLoginUserEmail/getLoginUserEmail";
import { getLoginUserPassword } from "../../model/selectors/getLoginUserPassword/getLoginUserPassword";
import DynamicModuleLoader, { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
// import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
// import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";


export interface LoginFormProps {useDispatch
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginFrom: loginReducer
}

const LoginForm = memo(({className, onSuccess}: LoginFormProps) => {

    const {t} = useTranslation();
    const dispatch = useAppDispatch();

    const email = useSelector(getLoginUserEmail);
    const password = useSelector(getLoginUserPassword);
    // const isLoading = useSelector(getLoginIsLoading);
    // const error = useSelector(getLoginError);

    const onChangeUserEmail = useCallback((value: string) => {
        dispatch(loginActions.setEmail(value || ''))
    }, [dispatch])

    const onChangeUserPassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])
  
    const onLoginClick = useCallback(async () => {

        const result = await dispatch(loginByUserEmail({email, password}))
        console.log(result)
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [dispatch, email, onSuccess, password])

    return (
        <DynamicModuleLoader 
            reducers={initialReducers}
            removeAfterUnmount={true}
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Input 
                    type="text" 
                    name="email" 
                    placeholder="Input email"
                    value={email}
                    onChange={onChangeUserEmail}
                />
                <Input 
                    type="password" 
                    name="password" 
                    placeholder="Input password"
                    value={password}
                    onChange={onChangeUserPassword}
                />
                <Button 
                    theme={ButtonTheme.OUTLINE}
                    rounded
                    onClick={onLoginClick}
                >
                    {t('Login')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})

LoginForm.displayName = 'LoginForm';

export default LoginForm;
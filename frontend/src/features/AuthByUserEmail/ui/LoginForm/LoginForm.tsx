import { classNames } from "shared/lib/classNames/classNames";
import * as cls from './LoginForm.module.scss';
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Input } from "shared/ui/Input/Input";
import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../model/slice/login.slice";
import { getLoginState } from "features/AuthByUserEmail/model/selectors/getLoginState/getLoginState";
import { loginByUserEmail } from "../../model/services/loginByUserEmail/loginByUserEmail";


interface LoginFormProps {
    className?: string
}

const LoginForm = memo(({className}: LoginFormProps) => {

    const {t} = useTranslation();
    const dispatch = useDispatch();

    const {email, password} = useSelector(getLoginState);

    const onChangeUserEmail = useCallback((value: string) => {
        dispatch(loginActions.setEmail(value || ''))
    }, [dispatch])

    const onChangeUserPassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])
  
    const onLoginClick = useCallback(() => {
        (dispatch as any)(loginByUserEmail({email, password}))
    }, [dispatch])

    return (
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
    )
})

LoginForm.displayName = 'LoginForm';

export {LoginForm}
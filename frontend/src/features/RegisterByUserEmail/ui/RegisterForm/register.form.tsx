import { classNames } from "shared/lib/classNames/classNames";
import * as cls from './register.form.module.scss';
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Input } from "shared/ui/Input/Input";
import { memo, useCallback, } from "react";
import { getRegisterState } from "../../model/selectors/getRegisterState/getRegisterState";
import { useDispatch, useSelector } from "react-redux";
import { registerActions } from "../../model/slice/register.slice";
import { RegisterByUserEmail } from "../..//model/services/registerByUserEmail/registerByUserEmail";


interface RegisterFormProps {
    className?: string
}

const RegisterForm = memo(({className}: RegisterFormProps) => {

    const {t} = useTranslation();
    const dispatch = useDispatch();

    const {name, email, password} = useSelector(getRegisterState);

    const onChangeUserName = useCallback((value: string)=> {
        dispatch(registerActions.setName(value))
    }, [dispatch])

    const onChangeUserEmail = useCallback((value: string) => {
        dispatch(registerActions.setEmail(value))
    }, [dispatch])

    const onChangeUserPassword = useCallback((value: string) => {
        dispatch(registerActions.setPassword(value))
    }, [dispatch])

    const onRegisterClick = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (dispatch as any)(RegisterByUserEmail({name, email, password}))
    }, [dispatch, email, name, password])

    return (
        <div className={classNames(cls.RegisterForm, {}, [className])}>
            <Input 
                type="text" 
                name="Name" 
                placeholder="Input name"
                value={name}
                onChange={onChangeUserName}
            />
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
                onClick={onRegisterClick}
            >
                {t('Register')}
            </Button>
        </div>
    )
})

RegisterForm.displayName = 'RegisterForm';

export {RegisterForm}

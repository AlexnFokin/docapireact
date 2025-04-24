import { classNames } from "shared/lib/classNames/classNames";
import * as cls from './register.form.module.scss';
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Input } from "shared/ui/Input/Input";
import { memo, } from "react";
// import { useDispatch, useSelector } from "react-redux";


interface RegisterFormProps {
    className?: string
}

const RegisterForm = memo(({className}: RegisterFormProps) => {

    const {t} = useTranslation();
    // const dispatch = useDispatch();

    // const {email, password} = useSelector(getRegisterState);

    // const onRegisterClick = useCallback(() => {
    //     (dispatch as any)(RegisterByUserEmail({email, password}))
    // }, [dispatch])

    return (
        <div className={classNames(cls.RegisterForm, {}, [className])}>
            <Input 
                type="text" 
                name="email" 
                placeholder="Input email"
                // value={email}
                // onChange={onChangeUserEmail}
            />
            <Input 
                type="password" 
                name="password" 
                placeholder="Input password"
                // value={password}
                // onChange={onChangeUserPassword}
            />
            <Button 
                theme={ButtonTheme.OUTLINE}
                rounded
                // onClick={onRegisterClick}
            >
                {t('Register')}
            </Button>
        </div>
    )
})

RegisterForm.displayName = 'RegisterForm';

export {RegisterForm}
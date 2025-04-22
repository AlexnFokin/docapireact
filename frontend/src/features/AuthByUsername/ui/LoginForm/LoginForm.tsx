import { classNames } from "shared/lib/classNames/classNames";
import * as cls from './LoginForm.module.scss';
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Input } from "shared/ui/Input/Input";
import { useState } from "react";

interface LoginFormProps {
    className?: string
}

const LoginForm = ({className}: LoginFormProps) => {

    const {t} = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input 
                type="text" 
                name="email" 
                placeholder="Input email"
                value={email}
                onChange={setEmail}
            />
            <Input 
                type="password" 
                name="password" 
                placeholder="Input password"
                value={password}
                onChange={setPassword}
            />
            <Button 
                theme={ButtonTheme.OUTLINE}
                rounded
            >
                {t('Login')}
            </Button>
        </div>
    )
}

export {LoginForm}
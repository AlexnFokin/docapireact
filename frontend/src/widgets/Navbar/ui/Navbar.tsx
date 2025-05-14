import { useState, useCallback } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import * as cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUserEmail";
import { RegisterModal } from "features/RegisterByUserEmail";
import { useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const [isRegisterModal, setIsRegisterModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseRegisterModal = useCallback(() => {
        setIsRegisterModal(false);
    }, [])

    const onShowRegisterModal = useCallback(()  => {
        setIsRegisterModal(true);
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <div className={classNames (cls.navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Logout')}
                </Button>
            </div>
        )
    }

    return (
        <div className={classNames (cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Login')}
            </Button>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.links}
                onClick={onShowRegisterModal}
            >
                {t('Register')}
            </Button>
            {isAuthModal && <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />}
            <RegisterModal
                isOpen={isRegisterModal}
                onClose={onCloseRegisterModal}
            />
            <div className={cls.links}>
             
            </div>
        </div>
    );
};


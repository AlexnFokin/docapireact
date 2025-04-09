import { useState, useCallback } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Modal } from "shared/ui/Modal/Modal";
import * as cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames (cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line */}
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.')}
            </Modal>
            <div className={cls.links}>
             
            </div>
        </div>
    );
};


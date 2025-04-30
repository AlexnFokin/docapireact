import { classNames } from "shared/lib/classNames/classNames";
import * as cls from './LoginModal.module.scss';
import { Modal } from "shared/ui/Modal/Modal";
import { LoginFormAsync } from "../LoginForm/Login.form.async";
import { Suspense } from "react";
import Loader from "shared/ui/Loader/ui/Loader";


interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void
}

const LoginModal = (props: LoginModalProps) => {

    const {className, isOpen, onClose} = props

    return (
        <Modal className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy={true}
        >
            <Suspense fallback={<Loader/>}>
                <LoginFormAsync onSuccess={onClose}/>
            </Suspense>
        </Modal>
    )
}

export {LoginModal}
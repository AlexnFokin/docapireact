import { classNames } from "shared/lib/classNames/classNames";
import * as cls from './register.modal.module.scss';
import { Modal } from "shared/ui/Modal/Modal";
import { RegisterForm } from "../RegisterForm/register.form";
;


interface RegisterModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void
}

const RegisterModal = (props: RegisterModalProps) => {

    const {className, isOpen, onClose} = props

    return (
        <Modal className={classNames(cls.RegisterModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy={true}
        >
            <RegisterForm/>
        </Modal>
    )
}

export {RegisterModal}
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from './Modal.module.scss';

interface ModalProps {
    className?: string
}

export const Modal = (props: ModalProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.Modal, {}, [className])}>
      
        </div>
    )
}
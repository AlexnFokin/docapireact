import { ButtonHTMLAttributes, FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import * as cls from "./Button.module.scss"

export enum ThemeButton {
    CLEAR = 'clear',
    ERROR = 'error',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

/* eslint-disable react/jsx-props-no-spreading */
export const Button: FC<ButtonProps> = (props) => {

    const {
        className,
        children,
        theme,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
import { ButtonHTMLAttributes, FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import * as cls from "./Button.module.scss"

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    Xl = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    rounded?: boolean;
}

/* eslint-disable react/jsx-props-no-spreading */
export const Button: FC<ButtonProps> = (props) => {

    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        rounded = false,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square] : square,
        [cls[size]]: true,
        [cls.rounded]: rounded
    }

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
import { ButtonHTMLAttributes, memo, ReactNode } from "react"
import { classNames, Mods } from "shared/lib/classNames/classNames"
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
    disabled?: boolean;
    children?: ReactNode 
}

/* eslint-disable react/jsx-props-no-spreading */
export const Button = memo((props: ButtonProps) => {

    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        disabled,
        size = ButtonSize.M,
        rounded = false,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square] : !!square,
        [cls[size]]: true,
        [cls.rounded]: !!rounded,
        [cls.disabled]: !!disabled
    }

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
})

Button.displayName = 'Button';
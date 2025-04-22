import { classNames } from "shared/lib/classNames/classNames";
import * as cls from './Input.module.scss';
import { InputHTMLAttributes, memo } from "react";


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    value?: string
}

/* eslint-disable react/jsx-props-no-spreading */
export const Input = memo((props: InputProps) => {
    const {
        className,
        placeholder = 'Input',
        value,
        onChange,
        type='text',
        ...otherProps

    } = props;


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <input 
            className={classNames(cls.Input, {}, [className])}
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
            type={type}
            {...otherProps}
        />
    );
})

Input.displayName = 'Input';
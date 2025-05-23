/* eslint-disable no-unused-vars */
import { classNames } from "shared/lib/classNames/classNames"
import * as cls from './AppLink.module.scss'
import { ReactNode } from "react"
import { Link, LinkProps } from "react-router-dom"

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children: ReactNode
}

export const AppLink = (props: AppLinkProps) => {

    const {
        to, 
        className, 
        children, 
        theme = AppLinkTheme.PRIMARY, 
        ...otherProps 
    } = props;

    return (
        <Link 
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}

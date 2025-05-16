import { FC, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import * as cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from "app/providers/ThemeProvider"
import LightThemeIcon from 'shared/assets/icons/theme-light.svg'
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button"

export interface ThemeSwitcherProps {
    className? : string
}

const ThemeSwitcherComponent: FC<ThemeSwitcherProps> = ({className}) => {

    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            { theme == Theme.DARK ? <LightThemeIcon/> : <DarkThemeIcon/>}
        </Button>
    )
}

export const ThemeSwitcher = memo(ThemeSwitcherComponent);
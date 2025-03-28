import { FC } from "react"
import { classNames } from "shared/lib/classNames"
import * as cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from "app/providers/ThemeProvider"
import LightThemeIcon from 'shared/assets/icons/theme-light.svg'
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg'
import { Button } from "shared/ui/Button"
import { ThemeButton } from "shared/ui/Button/ui/Button"

export interface ThemeSwitcherProps {
    claassName? : string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({claassName}) => {

    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [claassName])}
            onClick={toggleTheme}
        >
            { theme == Theme.DARK ? <LightThemeIcon/> : <DarkThemeIcon/>}
        </Button>
    )
}
import { FC } from 'react';
import * as cls from './LangSwitcher.module.scss';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

export interface LangSwitcherProps {
    className?: string
}

const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    const { t, i18n } = useTranslation();

    const lang = i18n.language === 'ru' ? 'en' : 'ru'

    const toggleLang = async () => {
        i18n.changeLanguage(lang)
    }
    return (
            <Button
                className={classNames(cls.LangSwitcher, {}, [className])} 
                theme={ThemeButton.CLEAR}
                onClick={toggleLang}
            >
               {lang}
            </Button>
    )
}

export default LangSwitcher;
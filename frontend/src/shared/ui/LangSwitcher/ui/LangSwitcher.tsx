import { FC, memo } from 'react';
import * as cls from './LangSwitcher.module.scss';
import { Button } from 'shared/ui/Button/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

export interface LangSwitcherProps {
    className?: string;
    short?: boolean
}

const LangSwitcher: FC<LangSwitcherProps> = ({className, short}) => {
    const { i18n } = useTranslation();

    const currentLang = i18n.language;

    const lang = short
        ? (currentLang === 'ru' ? 'En' : 'Ru')
        : (currentLang === 'ru' ? 'English' : 'Russian');

    const toggleLang = async () => {
        const newLang = currentLang === 'ru' ? 'en' : 'ru';
        await i18n.changeLanguage(newLang);
    }
    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])} 
            theme={ButtonTheme.CLEAR}
            onClick={toggleLang}
        >
            {lang}
        </Button>
    )
}

export default memo(LangSwitcher);
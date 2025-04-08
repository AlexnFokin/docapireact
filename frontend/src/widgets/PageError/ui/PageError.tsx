import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from './PageError.module.scss';
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";

interface PageErrorProps {
    className?: string
}

const PageError = ({className}: PageErrorProps) => {

    const {t} = useTranslation('pageError');

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>
                {t('An unexpected error occurred')}
            </p>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={reloadPage}>
                {t('Refresh page')}
            </Button>
        </div>
    )
}

export default PageError;
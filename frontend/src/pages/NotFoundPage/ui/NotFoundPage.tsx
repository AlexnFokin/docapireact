import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import * as cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}


const NotFoundPage = ({className}: NotFoundPageProps) => {

     const {t} = useTranslation('notFound');
    return (
        <div className={classNames (cls.NotFoundPage, {}, [className])}>
        {t("Page not Found")}
        </div>
    )
}

export default NotFoundPage;
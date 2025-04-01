import { classNames } from 'shared/lib/classNames';
import * as cls from './PageLoader.module.scss';
import Loader from '../Loader/ui/Loader';

interface PageLoaderProps {
    className?: string
}

const PageLoader = ({className}: PageLoaderProps) => {
    return (
        <div className={classNames (cls.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    )
}

export default PageLoader;
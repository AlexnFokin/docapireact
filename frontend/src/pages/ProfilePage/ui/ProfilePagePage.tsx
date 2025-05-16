import { classNames } from "shared/lib/classNames/classNames";
import * as cls from './ProfilePagePage.module.scss';
import { Text } from "shared/ui/Text/Text";
import DynamicModuleLoader, { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "entities/Profile";

interface ProfilePagePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePagePage = (props: ProfilePagePageProps) => {
    const {
        className,
    } = props;

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePagePage, {}, [className])}>
Profile page<Text
                    title="hello world"
                    text="asdfasdf asdfsadf asdfsadfasd asdf"
                />
            </div>
        </DynamicModuleLoader>

    );
}

export default ProfilePagePage;
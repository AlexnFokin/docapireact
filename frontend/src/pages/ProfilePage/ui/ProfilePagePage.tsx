import { classNames } from "shared/lib/classNames/classNames";
import * as cls from './ProfilePagePage.module.scss';
import { Text } from "shared/ui/Text/Text";

interface ProfilePagePageProps {
    className?: string;
}

const ProfilePagePage = (props: ProfilePagePageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ProfilePagePage, {}, [className])}>
Profile page<Text
                title="hello world"
                text="asdfasdf asdfsadf asdfsadfasd asdf"
            />
        </div>
    );
}

export default ProfilePagePage;
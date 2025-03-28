import * as cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {

    return (
        <div className={classNames (cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/'} className={cls.mainLink}>
                Home
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>
                About
                </AppLink>
            </div>
        </div>
    );
};

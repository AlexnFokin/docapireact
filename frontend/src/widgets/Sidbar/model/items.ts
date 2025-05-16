import { SVGProps } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemInterface {
    path: string;
    text: string;
    Icon: React.FC<SVGProps<SVGSVGElement>>
}

export const SidebarItemList: SidebarItemInterface[] = [
    {
        path: RoutePath.main,
        text: "Home",
        Icon: HomeIcon
    },
    {
        path: RoutePath.about,
        text: "About",
        Icon: AboutIcon
    },
    {
        path: RoutePath.profile,
        text: "Profile",
        Icon: ProfileIcon
    },
]
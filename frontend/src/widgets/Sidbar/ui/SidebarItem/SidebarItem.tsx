import * as cls from './SidebarItem.module.scss';
import { t } from "i18next";
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemInterface } from "widgets/Sidbar/model/items";

interface SidebarItemProps {
    item: SidebarItemInterface;
    collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {

    const {item, collapsed} = props 

    return (           
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, {[cls.collapsed]: collapsed})}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
               
    )
})

SidebarItem.displayName = 'SidebarItem';
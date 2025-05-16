import { classNames } from "shared/lib/classNames/classNames";
import * as cls from './Sidebar.module.scss';
import { memo, useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/ui/Button";
import { SidebarItemList } from "../../model/items";
import {SidebarItem} from "../SidebarItem/SidebarItem";

interface SidebarProps {
    className?: string
}

const Sidebar = ({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div 
            data-testid="sidebar"
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.items}>
                {SidebarItemList.map((item)=> (
                    <SidebarItem 
                        item={item} 
                        key={item.path}
                        collapsed={collapsed}
                    />
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher
                    short={collapsed}
                />
            </div>
        </div>
    )
}

export default memo(Sidebar);
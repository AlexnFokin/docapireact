import { classNames } from "shared/lib/classNames/classNames";
import * as cls from './Sidebar.module.scss';
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { Button } from "shared/ui/Button/ui/Button";


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
                onClick={onToggle}>
                    toggle Sidebar
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    )
}

export default Sidebar;
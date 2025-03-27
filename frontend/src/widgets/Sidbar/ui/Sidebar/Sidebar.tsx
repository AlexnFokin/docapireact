import { classNames } from "shared/lib/classNames";
import * as cls from './Sidebar.module.scss';
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";


interface SidebarProps {
    className?: string
}

const Sidebar = ({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle Sidebar</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    )
}

export default Sidebar;
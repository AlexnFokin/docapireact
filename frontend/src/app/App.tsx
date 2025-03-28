import "./styles/index.scss";

import { useTheme } from "./providers/ThemeProvider/lib/UseTheme";
import { classNames } from "../shared/lib/classNames";
import { AppRouter } from "./router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidbar";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const App = () => {

const {theme, toggleTheme} = useTheme();
const { t, i18n } = useTranslation();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense> 
                <Navbar/>
                <div className="content-page">
                        <Sidebar/>   
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
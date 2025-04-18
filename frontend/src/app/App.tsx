import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidbar";
import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider";

const App = () => {

    const {theme} = useTheme();

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
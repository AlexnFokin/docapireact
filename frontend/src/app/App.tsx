import "./styles/index.scss";

import { useTheme } from "./providers/ThemeProvider/lib/UseTheme";
import { classNames } from "../shared/lib/classNames";
import { AppRouter } from "./router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidbar";



const App = () => {

const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className="content-page">
                <Sidebar/>   
                <AppRouter />
            </div>
            
        </div>
    );
}

export default App;
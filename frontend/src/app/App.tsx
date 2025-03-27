import "./styles/index.scss";

import { useTheme } from "./providers/ThemeProvider/lib/UseTheme";
import { classNames } from "../shared/lib/classNames";
import { AppRouter } from "./router";
import { Navbar } from "widgets/Navbar";



const App = () => {

const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            
           <Navbar/>
        <AppRouter />
        </div>
    );
}

export default App;
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";

import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider/lib/UseTheme";
import { classNames } from "../shared/lib/classNames";
import { AboutPageAsync } from "pages/AboutPage/ui/AboutPage.async";
import { MainPageAsync } from "pages/MainPage";



const App = () => {

const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>
               { theme == 'dark' ? 'Light' : 'Dark'}
            </button>
            <Link to={'/home'}>Home</Link>
            <Link to={'/about'}>About</Link>

        <Suspense fallback={<div>Loading...</div>}>    
            <Routes>
                <Route path="about" element={<AboutPageAsync/>} />
                <Route path="home" element={<MainPageAsync/>} />
            </Routes>
        </Suspense>
        </div>
    );
}

export default App;
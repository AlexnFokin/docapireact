import { Link, Route, Routes } from "react-router-dom";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import "../styles/index.scss";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense } from "react";
import { useTheme } from "../theme/UseTheme";
import { classNames } from "../helpers/classNames/classNames";



const App = () => {

const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [])}>
            <button onClick={toggleTheme}>
               { theme == 'dark' ? 'Light' : 'Dark'}
            </button>
            <Link to={'/comp1'}>comp1</Link>
            <Link to={'/comp2'}>comp2</Link>
            <Link to={'/about'}>About</Link>

        <Suspense fallback={<div>Loading...</div>}>    
            <Routes>

                <Route path="/comp1" element={<Comp1 />} />
                <Route path="/comp2" element={<Comp2 />} />
                <Route path="about" element={<AboutPageAsync/>} />
            </Routes>
        </Suspense>
        </div>
    );
}

export default App;
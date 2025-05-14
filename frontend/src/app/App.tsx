import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidbar";
import { Suspense, useEffect } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { userActions } from "entities/User";

const App = () => {

    const {theme} = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])
    
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
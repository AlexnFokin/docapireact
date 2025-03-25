import ReactDOM from "react-dom/client";
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";


const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
    );
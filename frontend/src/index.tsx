import ReactDOM from "react-dom/client";
import App from './app/App';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import 'shared/config/i18n/i18n';

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <ThemeProvider> 
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);
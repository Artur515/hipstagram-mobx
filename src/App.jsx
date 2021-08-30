import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/appRouter/AppRouter";
import NavBar from "./components/navBar/NavBar";



const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;

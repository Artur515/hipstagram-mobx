import './App.css';
import Auth from "./pages/auth/Auth";
import {BrowserRouter, Route} from "react-router-dom";
import Application from "./application/Application";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route  path='/' component={Auth}/>
                <Route exact path='/users' component={Application}/>
            </BrowserRouter>
        </div>
    );
}

export default App;

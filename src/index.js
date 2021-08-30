import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthStore from "./store/authStore";
import HipstaStore from "./store/hipstaStore";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        auth: new AuthStore(),
        hipsta: new HipstaStore()
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);

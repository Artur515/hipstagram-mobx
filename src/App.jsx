import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/appRouter/AppRouter";
import NavBar from "./components/navBar/NavBar";
import React, {useContext, useState} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "./index";


const App = observer(() => {
    const {auth} = useContext(Context)

    const [isLoggedIn] = useState(() => {
        const current = localStorage.getItem('currentUserToken')
        return current
    })

    if (isLoggedIn) {
        auth.setIsAuth(true)
    } else {
        auth.setIsAuth(false)
    }


    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
})

export default App;

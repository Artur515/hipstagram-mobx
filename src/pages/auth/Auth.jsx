import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import AuthPageImage from "../../components/authPageImage/AuthPageImage";
import './auth.css'
import Registration from "./registration/Registration";
import Login from "./login/Login";
import {Route} from "react-router-dom";

const Auth = () => {
    const [isLoggedIn] = useState(() => {
        const current = JSON.parse(localStorage.getItem('currentUserToken'))
        return current
    })

    if (isLoggedIn) {
        return <Redirect to="/users"/>
    }

    return (
        <div className='auth_page'>
            <AuthPageImage/>
            <Route exact path='/' component={Registration}/>
            <Route exact path='/auth/login' component={Login}/>
        </div>
    );
}


export default Auth;
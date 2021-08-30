import React from 'react';
import {Card, Container} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import Registration from "../registration/Registration";
import style from './style.module.css'
import {REGISTRATION_ROUTE} from "../../utils/consts";
import Login from "../login/Login";
import {observer} from "mobx-react-lite";

const Auth = observer(() => {
    const location = useLocation()
    const isLogin = location.pathname === REGISTRATION_ROUTE


    return (
        <Container className='d-flex justify-content-center align-items-center'
                   style={{height: window.innerHeight - 54}}>
            <Card className={style.form_card}>
                <h2 className='m-auto'>{isLogin ? 'Registration' : 'Login'}</h2>
                {isLogin ? <Registration/> : <Login/>}
            </Card>
        </Container>
    );
});

export default Auth;
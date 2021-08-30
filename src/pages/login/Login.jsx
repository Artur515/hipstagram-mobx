import React, {useContext} from 'react';
import {Button, Form, Row} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import {CURRENT_USER_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import {validations} from "../../validations";
import style from "../registration/style.module.css";
import {useForm} from "react-hook-form";
import {loginCurrentUser} from "../../api/hipstagramService";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Login = observer(() => {

    const history = useHistory()
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {auth} = useContext(Context)


    const onSubmit = data => {
        const {login, password} = data
        loginCurrentUser(login, password)
            .then(response => {
                console.log(response.data)
                if (response.data.access_token) {
                    localStorage.setItem('currentUserToken', JSON.stringify(response.data.access_token))
                    auth.setError('')
                    auth.setIsAuth(true)
                    history.push(CURRENT_USER_ROUTE)
                }
            }).catch((error) => {
            auth.setError(error.message)
            auth.setIsAuth(false)
        })
    };


    return (
        <Form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            {auth.error && <p className={style.error}>{auth.error}</p>}
            <Form.Control className='mt-4'
                          placeholder='Enter login...'
                          {...register('login', validations.login)}/>
            {errors?.login?.type === "required" && errors?.login?.type === "required" &&
            <p className={style.form_required}>This field is required</p>}
            {errors?.login?.type === "maxLength" && (
                <p className={style.form_required}>Login cannot exceed 20 characters</p>)}

            <Form.Control className='mt-4'
                          placeholder='Enter password...'
                          {...register('password', validations.password)}/>
            {errors?.password?.type === "required" && errors?.password?.type === "required" &&
            <p className={style.form_required}>This field is required</p>}
            {errors?.password?.type === "minLength" && (
                <p className={style.form_required}>Password is too short</p>)}
            {errors?.password?.type === "maxLength" && (
                <p className={style.form_required}>Password is too long</p>)}
            <Row className='d-flex justify-content-around align-items-center mt-4'>
                <div>need to <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink></div>
                <Button type="submit" variant={"outline-dark"}>Login</Button>
            </Row>
        </Form>
    );
});

export default Login;
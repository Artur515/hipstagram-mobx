import React, {useContext} from 'react';
import {Button, Form, Row} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import {LOGIN_ROUTE} from "../../utils/consts";
import {registrationCurrentUser} from "../../api/hipstagramService";
import {useForm} from "react-hook-form";
import {validations} from "../../validations";
import style from './style.module.css'
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Registration = observer(() => {
    const history = useHistory()
    const {auth} = useContext(Context)
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = data => {
        const {login, email, password} = data
        registrationCurrentUser(login, email, password)
            .then(response => response.data.id && history.push(LOGIN_ROUTE))
            .catch((error) => auth.setError(error.message))
    };


    return (
        <Form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column'>
            {auth.error && <p className={style.error}>{auth.error}</p>}
            <Form.Control className='mt-4'
                          placeholder='Enter login...'
                          {...register('login', validations.login)}/>
            {errors?.login?.type === "required" && errors?.login?.type === "required" &&
            <p className={style.form_required}>This field is required</p>}
            {errors?.login?.type === "maxLength" && (
                <p className={style.form_required}>Login cannot exceed 20 characters</p>)}

            <Form.Control className='mt-4'
                          placeholder='Enter email...'
                          {...register('email', validations.email)}/>
            {errors?.email?.type === "required" && errors?.email?.type === "required" &&
            <p className={style.form_required}>This field is required</p>}
            {errors?.email?.type === "pattern" && (
                <p className={style.form_required}>Enter a valid email address</p>)}

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
                <div>if you have account <NavLink to={LOGIN_ROUTE}>Login</NavLink></div>
                <Button type="submit" variant={"outline-dark"}>Registration</Button>
            </Row>
        </Form>
    );
});

export default Registration;
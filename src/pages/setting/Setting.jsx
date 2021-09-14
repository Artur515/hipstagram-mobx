import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Image} from "react-bootstrap";
import UpdatePassword from "../../components/updatePassword/UpdatePassword";
import {useForm} from "react-hook-form";
import {Context} from "../../index";
import {validations} from "../../validations";
import style from "../registration/style.module.css";

const Setting = () => {
    const [avatar, setAvatar] = useState('')
    const {hipsta} = useContext(Context)
    const {register, handleSubmit, formState: {errors}} = useForm();


    const onSubmit = data => {
        const {login, firstName, lastName, email} = data
        const requestBody = {
            login: login,
            firstName: firstName,
            lastName: lastName,
            email: email,
            avatar: avatar.imagePreview
        }
        console.log(requestBody)
        // if (login && firstName && lastName && email && avatar) {}
    }


    const onHandleChangePhoto = (event) => {
        const reader = new FileReader()
        let imageFromInput = event.target.files[0]
        // console.log(imageFromInput)
        setAvatar(imageFromInput)
        if (imageFromInput !== null) {
            reader.onloadend = () => {
                setAvatar({
                    imagePreview: reader.result
                })
            }
            reader.readAsDataURL(imageFromInput)
        } else {
            return setAvatar({
                imagePreview: avatar
            })
        }
    }


    return (
        <Container>
            <Image src={avatar.imagePreview} style={{maxWidth:350}}/>
            <Card className='m-3'>
                <Form className='text-lg-center m-4' onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">

                        <Form.Control className='mt-5'
                                      placeholder="Enter your name" {...register('firstName', validations.firstName)}/>
                        {errors?.firstName?.type === "required" && errors?.firstName?.type === "required" &&
                        <Form.Text style={{color: 'red', position: 'absolute'}}>This field is required</Form.Text>}
                        {errors?.firstName?.type === "maxLength" && (
                            <Form.Text style={{color: 'red', position: 'absolute'}}>Name cannot exceed 30
                                characters</Form.Text>)}
                        {errors?.firstName?.type === "pattern" && (
                            <Form.Text style={{color: 'red', position: 'absolute'}} className={style.form_required}>Enter
                                letters from the alphabet</Form.Text>)}

                        <Form.Control className='mt-5'
                                      placeholder="Enter your last name" {...register('lastName', validations.lastName)}/>
                        {errors?.lastName?.type === "required" && errors?.lastName?.type === "required" &&
                        <Form.Text style={{color: 'red', position: 'absolute'}}>This field is required</Form.Text>}
                        {errors?.lastName?.type === "maxLength" && (
                            <Form.Text style={{color: 'red', position: 'absolute'}}>Name cannot exceed 30
                                characters</Form.Text>)}
                        {errors?.lastName?.type === "pattern" && (
                            <Form.Text style={{color: 'red', position: 'absolute'}} className={style.form_required}>Enter
                                letters from the alphabet</Form.Text>)}

                        <Form.Control className='mt-5'
                                      placeholder="Enter your login" {...register('login', validations.login)}/>
                        {errors?.login?.type === "required" && errors?.login?.type === "required" &&
                        <Form.Text style={{color: 'red', position: 'absolute'}}>This field is
                            required</Form.Text>}
                        {errors?.login?.type === "maxLength" && (
                            <Form.Text style={{color: 'red', position: 'absolute'}}>Login cannot exceed 20
                                characters</Form.Text>)}


                        <Form.Control className='mt-5' type="email"
                                      placeholder="Enter email" {...register('email', validations.email)}/>
                        {errors?.email?.type === "required" && errors?.email?.type === "required" &&
                        <Form.Text style={{color: 'red', position: 'absolute'}} className={style.form_required}>This
                            field is required</Form.Text>}
                        {errors?.email?.type === "pattern" && (
                            <Form.Text style={{color: 'red', position: 'absolute'}} className={style.form_required}>Enter
                                a valid email address</Form.Text>)}
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Change file</Form.Label>
                        <Form.Control className='p-1' type="file" onChange={onHandleChangePhoto}/>
                    </Form.Group>
                    <Button variant="outline-dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>

            <UpdatePassword/>
        </Container>
    );
};

export default Setting;
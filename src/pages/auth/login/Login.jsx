import React from 'react';
import {observer} from "mobx-react-lite";
import {useForm} from "react-hook-form";
import {validations} from "../../../helpers/validations";
import authentication from "../../../store/authentication";
import {Link, useHistory} from "react-router-dom";


const Login = observer(() => {
    const history = useHistory()
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        const {login, password} = data
        authentication.loginCurrentUser(login, password)
            .then(() => history.push('/users'))

    }
    return (
        <form className='auth_form' onSubmit={handleSubmit(onSubmit)}>
            <label className='auth_label'>Login</label>
            <input type="text" name='login' className='auth_input' {...register("login", validations.login)}/>
            {errors.login?.type === 'required' && <span className='auth_error'>{"Login is required"}</span>}
            <label className='auth_label'>Password</label>
            <input type="password" name='password'
                   className='auth_input'  {...register("password", validations.password)}/>
            {errors.password?.type === 'required' && <span className='auth_error'>{"Password is required"}</span>}
            {errors.password?.type === 'minLength' &&
            <span className='auth_error'>{"Password is too short "}</span>}
            {errors.password?.type === 'maxLength' && <span className='auth_error'>{"Password is too long "}</span>}
            <button className='auth_btn'>Log In</button>
            <p>If you not have account you can<Link to='/'><h3>Registration</h3></Link></p>
        </form>
    );
})


export default Login;
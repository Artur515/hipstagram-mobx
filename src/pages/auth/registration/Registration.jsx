import React from 'react';
import '../auth.css'
import {Link, useHistory} from 'react-router-dom';
import {useForm} from "react-hook-form";
import {validations} from "../../../helpers/validations";
import {observer} from "mobx-react-lite";
import authentication from "../../../store/authentication";


const Registration = observer(() => {
        const history = useHistory();
        const {register, handleSubmit, formState: {errors}} = useForm()
        const onSubmit = (data) => {
            const {login, email, password} = data
            authentication.registrationCurrentUser(login, email, password)
                .then((response) => response.data.id ? history.push('/auth/login') : '')
        }


        return (
            <form className='auth_form' onSubmit={handleSubmit(onSubmit)}>
                <label className='auth_label'>Login</label>
                <input type="text" className='auth_input'  {...register("login", validations.login)}/>
                {errors.login?.type === 'required' && <span className='auth_error'>{"Login is required"}</span>}
                <label className='auth_label'>Email</label>
                <input type="email" className='auth_input' {...register("email", validations.email)}/>
                {errors.email?.type === 'required' && <span className='auth_error'>{"Email is required"}</span>}
                <label className='auth_label'>Password</label>
                <input type="password" className='auth_input' {...register("password", validations.password)}/>
                {errors.password?.type === 'required' && <span className='auth_error'>{"Password is required"}</span>}
                {errors.password?.type === 'minLength' && <span className='auth_error'>{"Password is too short "}</span>}
                {errors.password?.type === 'maxLength' && <span className='auth_error'>{"Password is too long "}</span>}
                <button className='auth_btn'>Sign In</button>
                <p>If you not have account you can<Link to='/auth/login'><h3>Login</h3></Link></p>
            </form>
        );
    }
);

export default Registration;
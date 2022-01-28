import React from 'react';
import { useForm } from 'react-hook-form';


const Login = (props) => {

    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset,
    } = useForm({mode: "onBlur"})
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset();
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    First name:
                    <input {...register('firstName', {
                        required: 'Обязательное поле',
                        minLength: {
                            value: 5,
                            message: 'Минимум 5 символов'
                        }
                    })} />
                </label>
                <div style={{height: 40}}>
                    {errors?.firstName && <p>{errors?.firstName?.message || 'Error'}</p>}
                </div>
                <label>
                    Last name: 
                    <input {...register('lastName', {
                        required: 'Это поле обязательное',
                        maxLength: {
                            value: 10,
                            message: 'Максимум 10 символов для ввода в форму',
                        }
                    })} />
                </label>
                <div style={{height:40}}>
                    {errors?.lastName && <p>{errors?.lastName?.message || 'Error'}</p>}
                </div>
                <input type="submit" disabled={!isValid}></input>
            </form>
        </div>
    )
}

export default Login;
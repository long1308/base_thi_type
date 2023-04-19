import React, { useRef } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { signupUser } from '../api/product'
import { signup } from '../interface/product'
type Props = {}

const Signup = (props: Props) => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, watch } = useForm<signup>()
    const password = useRef({})
    password.current = watch('password', '')
    const onSubmit: SubmitHandler<signup> = async (data) => {
        try {
           await signupUser(data)
            navigate('/signin')
        } catch (err: any) {
            alert(err.response.data)
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h3>Signup</h3>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input {...register('name', { required: true })} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                {errors.name && <small id="emailHelp" className="form-text text-danger">Name không được để trống</small>}
            </div>
            <div className="form-group mt-3">
                <label htmlFor="exampleInputEmail2">Email address</label>
                <input {...register('email', { required: true })} type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" />
                {errors.email && <small id="emailHelp" className="form-text text-danger">Email không được để trống</small>}
            </div>
            <div className="form-group mt-3">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input {...register('password', { required: true })} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                {errors.password && <small id="emailHelp" className="form-text text-danger">Password không được để trống</small>}
            </div>
            <div className="form-group mt-3">
                <label htmlFor="exampleInputPassword2">Confirm Password</label>
                <input {...register('confirmPassword', {
                    required: true,
                    validate: (value) => value === password.current || 'Password không trùng'

                })} type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" />
                {errors.confirmPassword && <small id="emailHelp" className="form-text text-danger">Password không trùng khớp</small>}
            </div>
            <button className="btn btn-primary mt-3">Signin</button>
        </form>
    )
}

export default Signup
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { signin } from '../interface/product'
import { signinUser } from '../api/product'
type Props = {}

const Signin = (props: Props) => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<signin>()
    const onSubmit: SubmitHandler<signin> = async (data) => {
        try {
            await signinUser(data)
            navigate('/')
        } catch (err: any) {
            alert(err.response.data)
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h3>Signin</h3>
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
            <button className="btn btn-primary mt-3">Signin</button>
        </form >
    )
}

export default Signin
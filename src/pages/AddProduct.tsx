import React from 'react'
import { Iproduct } from '../interface/product'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
type Props = {
    onAdd: (product: Iproduct) => void,
}

const AddProduct = ({ onAdd }: Props) => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<Iproduct>()
    const onSubmit: SubmitHandler<Iproduct> = (data) => {
        onAdd(data)
        navigate('/admin')
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <h1>Form Add Product</h1>
                <div>
                    <label htmlFor="">Name</label>
                    <input {...register('name', { required: true })} className="form-control mb-2" type="text" placeholder="Name"></input>
                    {errors.name && <p className="text-danger">Name không được để trống</p>}
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input {...register('price', { required: true })} className="form-control mb-2" type="text" placeholder="Price"></input>
                    {errors.price && <p className="text-danger">Price không được để trống</p>}
                </div>
                <div>
                    <label htmlFor="">Thương hiệu</label>
                    <input {...register('thuonghieu', { required: true })} className="form-control mb-2" type="text" placeholder="Thương hiệu"></input>
                    {errors.thuonghieu && <p className="text-danger">Thương hiệu không được để trống</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Desc</label>
                    <textarea {...register('description', { required: true })} className="form-control mb-2" id="exampleFormControlTextarea1"></textarea>
                    {errors.description && <p className="text-danger">Desc không được để trống</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Xuất Xứ</label>
                    <select {...register('xuatxu', { required: true })} className="form-control" id="exampleFormControlSelect1">
                        <option value='Việt Nam'>Việt Nam</option>
                        <option value='Trung Quốc'>Trung Quốc</option>
                        <option value='Pháp'>Pháp</option>

                    </select>
                </div>
                <button className="btn btn-success mt-4">Add</button>
            </form>
        </div>
    )
}

export default AddProduct
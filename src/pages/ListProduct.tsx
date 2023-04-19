import React from 'react'
import { Iproduct } from '../interface/product'
import { Link } from 'react-router-dom'

type Props = {
    products: Iproduct[],
    onRemove: (id: number) => void,
}

const ListProduct = ({ products, onRemove }: Props) => {
    return (
        <div>
            <Link to={'/admin/add'} type="button" className="btn btn-primary">Add</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Thương Hiệu</th>
                        <th scope="col">Price</th>
                        <th scope="col">Desc</th>
                        <th scope="col">Xuất Xứ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => (
                            <tr key={product.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.thuonghieu}</td>

                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.xuatxu}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => onRemove(product.id)}>Xóa</button>
                                    <Link className='btn btn-success ml-2' to={`/admin/product/${product.id}/edit`}>Edit</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListProduct
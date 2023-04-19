import React, { useState } from 'react'
import { Iproduct } from '../interface/product'
import { Link } from 'react-router-dom'

type Props = {
    products: Iproduct[],
}

const HomePage = ({ products }: Props) => {
    const [search, setSearch] = useState('')
    const onhandChange = (event: any) => {
        setSearch(event.target.value)
    }
    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div>
            <div>
                <h3>Tìm kiếm</h3>
                <input type="search" placeholder='search' className='form-control' onChange={onhandChange} />
            </div>
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
                        filteredProducts.map((product, index) => (
                            <tr key={product.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.thuonghieu}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.xuatxu}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default HomePage
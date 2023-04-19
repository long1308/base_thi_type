import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import BaseLayout from './components/BaseLayout'
import HomePage from './pages/HomePage'
import AdminLayout from './components/AdminLayout'
import ListProduct from './pages/ListProduct'
import { Iproduct } from './interface/product'
import { createProduct, deleteProduct, getAllProducts, updateProduct } from './api/product'
import AddProduct from './pages/AddProduct'
import AdminEdit from './pages/AdminEdit'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
function App() {
  const [products, setProducts] = useState<Iproduct[]>([])
  useEffect(() => {
    (async () => {
      const { data } = await getAllProducts()
      setProducts(data)
    })()
  }, [])
  // add product 
  const addProduct = async (product: Iproduct) => {
    await createProduct(product)
    const { data } = await getAllProducts()
    setProducts(data)
  }
  // delete product
  const deleteProducts = async (id: number) => {
    const r = confirm("Bạn chắc chắn muốn xóa");
    r ? await deleteProduct(id).then(() => {
      setProducts(products.filter((product) => product.id !== id))
    }) : false
  }
  // update product
  const updateProducts = async (id: number, product: Iproduct) => {
    await updateProduct(id, product)
    const { data } = await getAllProducts()
    setProducts(data)
  }
  return (
    <div className="p-10">
      <Routes >
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<HomePage products={products} />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<ListProduct products={products} onRemove={deleteProducts} />} />
          <Route path='add' element={<AddProduct onAdd={addProduct} />} />
          <Route path='product/:id/edit' element={<AdminEdit onEdit={updateProducts} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

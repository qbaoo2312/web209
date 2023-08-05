import { IProduct } from "../interfaces/product"
import instance from "./instance"

const getAllProduct = () => {
    return instance.get('/products')
}
const getOneProduct = (id: string) => {
    return instance.get(`/products/${id}`)
}
const addProduct = (product: IProduct) => {
    return instance.post('/products', product)
}
const deleteProduct = (id: string) => {
    return instance.delete(`/products/${id}`)
}
const updateProduct = (product: IProduct) => {
    return instance.patch(`/products/${product.id}`, product)
}
export { getAllProduct, getOneProduct, addProduct, deleteProduct, updateProduct }

import { ICategory } from "../interfaces/category"
import instance from "./instance"

const getAllCategory = () => {
    return instance.get('categories')
}
const getOneCategory = (id:string) => {
    return instance.get(`categories/${id}`)
}
const addCategory = (category: ICategory) => {
    return instance.post(`categories`, category)
}
const delCategory = (id:string) => {
    return instance.delete(`categories/${id}`)
}
const editCategory = (category: ICategory) => {
    return instance.patch(`categories/${category._id}`, category)
}
export {getAllCategory, getOneCategory, delCategory, addCategory, editCategory}
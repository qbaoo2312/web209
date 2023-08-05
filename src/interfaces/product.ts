import { ICategory } from "./category";

export interface IProduct{
    _id: string,
    name: string,
    price: number,
    description: string,
    images: string[],
    categoryId:ICategory[]

}
import { ICategory } from "./category";

export interface IProduct{
    id: string,
    name: string,
    price: number,
    evaluate: string,
    description: string,
    images: string,
    categoryId:ICategory[]

}
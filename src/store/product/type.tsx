import { AddProductAction, DeleteProductAction, GetListProductAction, UpdateProductAction } from "./actions";

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export type GetListDipatchType = (args : GetListProductAction) => GetListProductAction


export type AddDipatchType = (args : AddProductAction) => AddProductAction

export type DeleteDipatchType = (args : DeleteProductAction) => DeleteProductAction

export type UpdateDipatchType = (args : UpdateProductAction) => UpdateProductAction

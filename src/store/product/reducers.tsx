import { IProduct } from "../../interfaces/product";
import { AddProductAction, DeleteProductAction, GetListProductAction, GetProductByIdAction, UpdateProductAction } from "./actions";

export interface IProductState {
    products: IProduct[],
    isDataLoaded: boolean,
    error: unknown,
}

const initProductState: IProductState = {
    products: [],
    isDataLoaded: false,
    error: null,

}

type ICombineAction = GetListProductAction | AddProductAction | UpdateProductAction | DeleteProductAction|GetProductByIdAction

 const productReducer = (state: IProductState = initProductState, action: ICombineAction): IProductState => {
    switch (action.type) {
        case 'product-get-list':
            state = {
                ...state,
                products: action.payload.products,
                isDataLoaded: true
            }
            break;
        case 'product-get-by-id':
            state = {
                ...state,
                products: action.payload.products,
                isDataLoaded: true
            }
            break;
        case 'add-product':
            state = {
                ...state,
                products: [...state.products, action.payload],
            }
            break;
        case 'update-product':
            state = {
                ...state,
                products: state.products.map(item => item.id === action.payload.id ? { ...item, ...action.payload } : item),
            }
            break;
        case 'delete-product':
            state = {
                ...state,
                products: state.products.filter(item => item.id !== action.payload),
            }
            break;

        default:
            return state    
    }
    return state
    
}
export default productReducer
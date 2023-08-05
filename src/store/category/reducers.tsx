import { IProduct } from "../../interfaces/product";
import {
  AddCategoryAction,
  DeleteCategoryAction,
  GetListCategoryAction,
  UpdateCategoryAction,
} from "./actions";
import { ICategory } from "../../interfaces/category";

export interface ICategoryState {
  categories: ICategory[];
  isDataLoaded: boolean;
  error: unknown;
}
const initCategoryState: ICategoryState = {
  categories: [],
  isDataLoaded: false,
  error: null,
};

type ICombineAction =
  | GetListCategoryAction
  | AddCategoryAction
  | UpdateCategoryAction
  | DeleteCategoryAction;

const categoryReducer = (
  state: ICategoryState = initCategoryState,
  action: ICombineAction
): ICategoryState => {
  switch (action.type) {
    case "get-list":
      console.log("hehe");
      state = {
        ...state,
        categories: action.payload.categories,
        isDataLoaded: true,
      };
      break;
    case "add-category":
      state = {
        ...state,
        categories: [...state.categories, action.payload],
      };
      break;
    case "update-category":
      state = {
        ...state,
        categories: state.categories.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
      break;
    case "delete-category":
      state = {
        ...state,
        categories: state.categories.filter(
          (item) => item.id !== action.payload
        ),
      };
      break;

    default:
      console.log("ga");
      return state;
  }
  return state;
};
export default categoryReducer;

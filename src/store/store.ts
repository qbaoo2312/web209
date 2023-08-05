import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from './product/product'

import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import productReducer, { IProductState } from './product/reducers';
import categoryReducer, { ICategoryState } from "./category/reducers";


export interface IRootState {
    product:IProductState
    category:ICategoryState

}

const rootReducer = combineReducers({
    product: productReducer,
    category: categoryReducer

})


export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [productsApi.reducerPath]: productsApi.reducer,
    // product: productReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
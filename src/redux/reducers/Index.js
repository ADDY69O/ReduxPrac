
import { Product_Reducer } from "./Product_Reducer"
import { combineReducers } from "redux";
const reducers = combineReducers({
    allProduct: Product_Reducer
})

export default reducers;
import { Action_types } from "../contants/Action_types"

export const SetProducts =(products)=>{
    return{
        type:Action_types.SET_PRODUCTS,
        payload:products

    }
}


export const SelectedProduct =(product)=>{
    return{
        type:Action_types.SELECTED_PRODUCT,
        payload:product 

    }
}



import { Action_types } from "../contants/Action_types";

const initial_State ={
    products:[  
    ]
}


export const Product_Reducer= (state=initial_State,{type,payload})=>{
    switch(type){
        case Action_types.SET_PRODUCTS:
            return {...state,products:payload};
        default:
            return state;    

    }
}
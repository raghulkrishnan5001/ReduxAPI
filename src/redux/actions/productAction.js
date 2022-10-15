import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) =>{
    console.log("Data from the list ui " ,products);
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    };
};

export const selectedProduct = (product) =>{
    return{
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:product,
    };
};
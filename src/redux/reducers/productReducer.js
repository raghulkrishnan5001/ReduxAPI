import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
 
 switch (type) {
    case ActionTypes.SET_PRODUCTS:
      // console.log("reducer data",payload);
      return {...state,products : payload};
    default:
      return state;
  }
  
};

import * as Actions from "../actions/productAction"

const initialState = {
    selectedproduct : {},
};

const productReducer = (state = initialState,action ) => {
    switch(action.type){
        case Actions.SET_SELECTED_PRODUCT:
            console.log(action);
            return{
               ...state,
               selectedproduct:action.payload,
            };

        default:
            return state; 
    }
};


export default productReducer;
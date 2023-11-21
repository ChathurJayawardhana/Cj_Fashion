import * as Actions from "../actions/productAction"

const initialState = {
    productList:[],
    productListLoadingStatus:"notStarted",
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

            case Actions.FETCH_PRODUCT_LIST_BEGIN:
                 return {
                    ...state,
                    productListLoadingStatus:"loading",

                 };

                 case Actions.FETCH_PRODUCT_LIST_SUCCESS:
                    return {
                       ...state,
                       productListLoadingStatus:"completed",
                       productList : action.payload,

   
                    }; 
                    case Actions.FETCH_PRODUCT_LIST_FAILURE:
                        return {
                           ...state,
                           productListLoadingStatus:"failure",
                           productList : [],
    
       
                        }; 


        default:
            return state; 
    }
};


export default productReducer;
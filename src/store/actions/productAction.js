import axios from "axios";
export const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";

export const FETCH_PRODUCT_LIST_BEGIN  = "FETCH_PRODUCT_LIST_BEGIN";
export const FETCH_PRODUCT_LIST_SUCCESS = "FETCH_PRODUCT_LIST_SUCCESS";
export const FETCH_PRODUCT_LIST_FAILURE = "FETCH_PRODUCT_LIST_FAILURE";

export const fetchProductListBegin = () => {
    return {
        type:FETCH_PRODUCT_LIST_BEGIN,
    };
};
export const fetchProductList      = ()  => {
    return(dispatch)=>{
        axios
        .get("https://cdn.radikadilanka.com/data.json")
        .then((response)=>{
           dispatch({
            type: FETCH_PRODUCT_LIST_SUCCESS,
            payload:response.data,
           });
        })
        .catch(()=>{
            dispatch({
                type:FETCH_PRODUCT_LIST_FAILURE,
            })
        });
    }
};

export const setSelectedProduct = (product) =>{
    return {
       type:SET_SELECTED_PRODUCT,
       payload:product,
    };
};
export const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";


export const setSelectedProduct = (product) =>{
    return {
       type:SET_SELECTED_PRODUCT,
       payload:product,
    };
};
import {FETCH_PRODUCTS,FILTER_PRODUCTS_BY_SIZE,SORT_PRODUCTS_BY_PRICE} from '../actions/actionTypes';

const initialState = {
    products: [],
    size: '',
    sort: ''
};
export const productsReducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCH_PRODUCTS:
            return ({...state,products:action.payload});
        case FILTER_PRODUCTS_BY_SIZE :
            return ({...state,size:action.payload.size,products:action.payload.products})
        case SORT_PRODUCTS_BY_PRICE :
            return ({...state,sort:action.payload.sort,products:action.payload.products})
        default :
            return state;
    }
}

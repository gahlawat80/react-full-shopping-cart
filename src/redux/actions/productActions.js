import data from '../../data.json';

export const fetchProducts = ()=>dispatch=>{
    //api call
    return dispatch({type: 'FETCH_PRODUCTS', payload:data.products});
}
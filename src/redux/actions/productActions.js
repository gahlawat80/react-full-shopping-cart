import data from '../../data.json';

export const fetchProducts = ()=>dispatch=>{
    //api call
    return dispatch({type: 'FETCH_PRODUCTS', payload:data.products});
}

export const filterProducts = (products,size)=>dispatch=>{
    console.log(products);
    console.log(size);
    return dispatch({
        type: 'FILTER_PRODUCTS_BY_SIZE',
        payload: {
            size,
            products: data.products.filter(x=>x.availableSizes.indexOf(size)>=0)
        }
    })
}

export const sortProducts = (products,sort)=>dispatch=>{
    const sortedItems = products.slice();
    sortedItems.sort((a,b)=>
        sort==="lowest"? 
            a.price>b.price? 1 : -1
        : sort==="highest"? a.price<b.price? 1 : -1
        : sort==="latest"? a._id>b._id?-1:1
        : 1
    )
    return dispatch({
        type:'SORT_PRODUCTS_BY_PRICE',
        payload:{
            sort,
            products: sortedItems
        }
    })
}
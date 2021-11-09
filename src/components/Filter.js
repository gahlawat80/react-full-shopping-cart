import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { filterProducts,sortProducts } from '../redux/actions/productActions';
    
    const Filter = (props) => {
        const allProducts = useSelector(state=>state.products.products);
        const size = useSelector(state=>state.products.size);
        const sort = useSelector(state=>state.products.sort);
        const dispatch = useDispatch();
        return (
            <div className="filter">
                {/* <p>{props.filteredCount} products</p> */}
                <p>{allProducts.length} products</p>
                <div className="filter-price">
                    Price Filter{" "}
                    <select value={sort} onChange={(e)=>dispatch(sortProducts(allProducts,e.target.value))}>
                        <option value="all">All</option>
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-size">
                    Size Filter{" "}
                    <select value={size} onChange={(e)=>dispatch(filterProducts(allProducts,e.target.value))}>
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
            </div>
        )
    }
    
    export default Filter
    
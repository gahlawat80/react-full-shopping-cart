    import React from 'react'
    
    const Filter = (props) => {
        return (
            <div className="filter">
                <p>{props.filteredCount} products</p>
                <div className="filter-price">
                    Price Filter{" "}
                    <select value={props.size} onChange={props.filterProduct}>
                        <option value="all">All</option>
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-size">
                    Size Filter{" "}
                    <select value={props.size} onChange={props.filterSize}>
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
    
    import React from 'react'
    
    const Filter = () => {
        return (
            <div className="filter">
                <p>{props.filteredCount} products</p>
                <div className="filter-price">
                    Price Filter{" "}
                    <select>
                        <option value="">ALL</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-size">
                    <select>
                        <option value="">ALL</option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>
                </div>
            </div>
        )
    }
    
    export default Filter
    
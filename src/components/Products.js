import React, { Component } from 'react'
import currencyFormatter from '../utils'

export default class Products extends Component {

    render(props) {
        return (
            <ul className="product-list">
                {this.props.products.map(product =>{
                    return(
                        <li className="product" key={product._id}>
                            <a href={`#${product._id}`}>
                                <img className="product-img" src={product.image} alt={product.title}></img>
                            </a>
                            <a href={`#${product._id}`}>{product.title}</a>
                            <div className="price">
                                <span>{currencyFormatter(product.price)}</span>
                                <button className="btn primary">Add to Cart</button>
                            </div>
                        </li>
                    )
                })}
                
            </ul>
        )
    }
}

import React from 'react'
import currencyFormatter from '../utils'

const Cart = ({cartItems,removeProduct}) => {
    let cartHeading= cartItems.length>0? `Cart have ${cartItems.length} item(s) added.`: `Cart have 0 item(s) added.`
    return (
        <div className="cart">
            <div className="cart-header">{cartHeading}</div>
            <ul className="cart-items">
                {cartItems.map(item=>
                    {
                        return (
                            <li className="card-item" key={item._id}>
                                <img src={item.image} alt={item.title} />
                                <p>{item.title}</p>
                                <div className="right">
                                    {`${currencyFormatter(item.price)}*${(item.count)}`}
                                    <button onClick={()=>removeProduct(item)}>Remove</button>
                                </div>
                            </li>
                        )
                    }
                )}
            </ul>
            {cartItems.length>0 && 
                <div className="total-price">
                    <p>Total: {currencyFormatter(cartItems.reduce((sum,current)=>sum+current.count*current.price,0))}</p>
                    <button className="checkout-btn">Checkout</button>
                </div>                    
            }
            
        </div>
    )
}

export default Cart

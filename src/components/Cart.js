import React, {useState} from 'react'
import currencyFormatter from '../utils'

const Cart = ({cartItems,removeProduct,saveFormDetails}) => {
    let cartHeading= cartItems.length>0? `Cart have ${cartItems.length} item(s) added.`: `Cart have 0 item(s) added.`
    
    const [isDetailsFormVisible,setIsDetailsFormVisible] = useState(false);
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [address,setAddress]=useState('');

    const handleChange = (e)=>{
        const value = e.target.value;
        switch(e.target.name){
            case "email":
                setEmail(value);
                break;
            case "name":
                setName(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "address":
                setAddress(value);
                break;
        }
    }
    const submitDetails = (e)=>{
        e.preventDefault();
        saveFormDetails({email,name,phone,address});
    }
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
                    <button className="checkout-btn" onClick={()=>setIsDetailsFormVisible(true)}>Next</button>
                </div>                    
            }
            {isDetailsFormVisible && 
                <div className="details">
                    <hr />
                    <h3 className="contactForm-title">Contact Details</h3>
                    <form onSubmit={submitDetails}>
                        <div className="email">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Enter email..." onChange={(e)=>handleChange(e)} />
                        </div>
                        <div className="name">
                            <label>Full Name</label>
                            <input type="text" name="name" placeholder="Enter full name..." onChange={(e)=>handleChange(e)} />
                        </div>
                        <div className="phone">
                            <label>Contact Number</label>
                            <input type="phone" name="phone" placeholder="Enter contact number..." onChange={(e)=>handleChange(e)} />
                        </div>
                        <div className="address">
                            <label>Address</label>
                            <input type="text" name="address" placeholder="Enter full address..." onChange={(e)=>handleChange(e)} />
                        </div>
                        <button className="checkout-btn" type="submit">Checkout</button>
                    </form>
                </div>
            }
            
        </div>
    )
}

export default Cart

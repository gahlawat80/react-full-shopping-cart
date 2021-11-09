import React from 'react';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from "./components/Products";
import data from './data.json';
import {Provider} from 'react-redux';
import {store} from './redux/store'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      products: data.products,
      cartItems: localStorage.getItem("cart-items")?JSON.parse(localStorage.getItem("cart-items")):[],
      contactDetails: {
        email: '',
        name: '',
        phone: '',
        address: ''
      }
    }
  }
  
  removeProduct = (product)=>{
    const cartItemsUpdated = this.state.cartItems.slice();

    this.setState({
      ...this.state,
      cartItems: cartItemsUpdated.filter(item => item._id!==product._id)
    });
    localStorage.setItem("cart-items",JSON.stringify(cartItemsUpdated.filter(item => item._id!==product._id)))
  }
  addToCart = (product)=>{
    const items = this.state.cartItems.slice();
    let alreadyInCart=false;
    items.forEach(item =>{
      if(item._id===product._id){
        alreadyInCart=true;
        item.count++;
      } 
    })
    if(!alreadyInCart){
      product.count=1;
      items.push(product);
    }
      this.setState({...this.state, cartItems:items})
      localStorage.setItem("cart-items",JSON.stringify(items));
  }
  saveFormDetails = (formDetails)=>{
    console.log(JSON.stringify(formDetails));
    this.setState({
      ...this.state,
      contactDetails: formDetails
    });
    console.log(JSON.stringify(this.state.contactDetails));
  }
  render(){
    return (
      <Provider store={store}>
      <div className="grid-container">
        <header className="header">
          <a href="#">Shopping Cart</a>
        </header>
        <section className="main">
            <div className="content">
              <Filter 
              />
              <Products 
                addToCart={this.addToCart}
              />
            </div>
            <div className="products-right">
              <Cart cartItems={this.state.cartItems} 
                removeProduct={this.removeProduct}
                saveFormDetails={this.saveFormDetails}
              />
            </div>
        </section>
        <footer className="footer">
          All rights reserved.
        </footer>
      </div>
      </Provider>
    );
  }
}

export default App;

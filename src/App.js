import React from 'react';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from "./components/Products";
import data from './data.json';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      products: data.products,
      size: "",
      sort: "",
      cartItems: []
    }
  }
  filterProduct = (e)=>{
    const sort = e.target.value;
    this.setState({
      sort: sort,
      products: this.state.products.slice().sort((a,b)=>
        sort==='lowest'?
          a.price>b.price?
            1:-1
          : sort==='highest'?
            a.price<b.price
              ?
                1:-1
            :sort==='latest'?
              a._id<b._id
                ?
                1:-1
            :1
      )
    })
    
  }
  filterSize=(e)=>{
    //console.log(e.target.value);
    this.setState({
      ...this.state,
      size: e.target.value,
      products: data.products.filter(product=> {
        if(product.availableSizes.indexOf(e.target.value)>=0){
          return product;
        } 
        
      })
    })
  }
  removeProduct = (product)=>{
    const cartItemsUpdated = this.state.cartItems.slice();

    this.setState({
      ...this.state,
      cartItems: cartItemsUpdated.filter(item => item._id!==product._id)
    })
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
  }
  render(){
    return (
      <div className="grid-container">
        <header className="header">
          <a href="#">Shopping Cart</a>
        </header>
        <section className="main">
            <div className="content">
              <Filter filteredCount={this.state.products.length} 
                size={this.state.size}
                sort={this.state.sort}
                filterProduct={this.filterProduct}
                filterSize={this.filterSize}
              />
              <Products products={this.state.products}
                addToCart={this.addToCart}
              />
            </div>
            <div className="products-right">
              <Cart cartItems={this.state.cartItems} 
                removeProduct={this.removeProduct}
              />
            </div>
        </section>
        <footer className="footer">
          All rights reserved.
        </footer>
      </div>
    );
  }
}

export default App;

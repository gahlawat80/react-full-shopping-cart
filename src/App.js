import React from 'react';
import Filter from './components/Filter';
import Products from "./components/Products";
import data from './data.json';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      products: data.products,
      size: "",
      sort: ""
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
              <Products products={this.state.products}/>
            </div>
            <div className="products-right">Sidebar</div>
        </section>
        <footer className="footer">
          All rights reserved.
        </footer>
      </div>
    );
  }
}

export default App;

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
  render(){
    return (
      <div className="grid-container">
        <header className="header">
          <a href="#">Shopping Cart</a>
        </header>
        <section className="main">
            <div className="content">
              <Filter filteredCount={this.state.products.length} />
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

import React, { Component } from 'react'
import currencyFormatter from '../utils'
import Modal from 'react-modal';
import {connect} from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';

class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            isModalOpen: false,
            product: null
        }
    }
    showModal = (product)=>{
        this.setState({isModalOpen:true,product});
        console.log('modal state is changed to true');
    }
    hideModal = ()=>{
        this.setState({isModalOpen:false,product:null});
    }
    componentDidMount(){
        this.props.fetchProducts();
    }
    render() {
        return (
            <ul className="product-list">
                {this.props.products.map(product =>{
                    return(
                        <li className="product" key={product._id}>
                            <a href={`#${product._id}`} onClick={()=>this.showModal(product)}>
                                <img className="product-img" src={product.image} alt={product.title}></img>
                            </a>
                            <a href={`#${product._id}`}>{product.title}</a>
                            <div className="price">
                                <span>{currencyFormatter(product.price)}</span>
                                <button className="btn primary" onClick={()=>this.props.addToCart(product)}>Add to Cart</button>
                            </div>
                            {this.state.isModalOpen && 
                                <Modal isOpen={this.state.isModalOpen} onRequestClose={this.hideModal}>
                                    <button className="closeModal-btn" onClick={this.hideModal}>X</button>
                                    
                                    <div className="product-details">
                                        <img src={product.image} alt={product.title} />
                                        <div className="product-detail-desc">
                                            <p><strong>{product.title}</strong></p>
                                            <p>{product.description}</p>
                                            <p>
                                                Available Sizes: {" "}
                                                {product.availableSizes.map((size,index)=>(
                                                    <span>{" "}
                                                        <button key={index} className="sizes-btn">{size}</button>
                                                    </span>
                                                ))}
                                                
                                            </p>
                                        </div>
                                        <button className="btn primary" onClick={()=>this.props.addToCart(product)}>Add to Cart</button>
                                    </div>
                                </Modal>
                            }
                        </li>
                    )
                })}
                
            </ul>
        )
    }
}
const mapStateToProps = (state)=>{
    console.log(state.products.products);
    
    return  {products: state.products.products}
}
const mapDispatchToProps = (dispatch)=>({
    fetchProducts: ()=>dispatch(fetchProducts())
})

export default connect(mapStateToProps,mapDispatchToProps)(Products);
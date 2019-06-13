import React, { Component } from 'react'
import {addProduct} from '../actions/productAction'
import { connect } from 'react-redux';

class ProductAdd extends Component {
    render() {
        return (
            <div>
                <h1>Add New Product</h1>
                <button onClick={() => this.props.addNewProduct({id:1, title:'product a', price:1500})}>Save Item</button>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => ({
    addNewProduct : (data) => dispatch(addProduct(data)),
  })
  
  export default connect(null, mapDispatchToProps)(ProductAdd);
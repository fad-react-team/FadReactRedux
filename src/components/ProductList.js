import React, { Component } from 'react'
import {connect} from 'react-redux'

class ProductList extends Component {
    render() {
        return (
            <div>
                <h2>Product List</h2>
                {this.props.products.map((item, index) => {
                    return (
                        <div>
                            <h3>{item.id}</h3>
                            <h4>{item.title}</h4>
                            <h4>{item.price}</h4>
                        </div>
                    );
                })}
            </div>
        )
    }
}



const mapStateToProps = state => ({
    products:state.productReducer,
  })

  
  export default connect(mapStateToProps)(ProductList);
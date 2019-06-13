import React, { Component } from 'react'
import {connect} from 'react-redux'

class Statistics extends Component {
    render() {
        return (
            <div>
                <h2>Product Count : {this.props.products.length}</h2>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    products:state.productReducer,
  })

  
  export default connect(mapStateToProps)(Statistics);
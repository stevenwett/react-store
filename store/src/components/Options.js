import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Product from './Product';

class Options extends Component {
  render() {
    const { products } = this.props 
    const productList = products.length ? (
      products.map(product => {
        return (
          <div className="product-wrapper" key={product.id}>
            <Product product={product} />
          </div>
        )
      })
    ) : (
      <div className="no-products">No apples chosen</div>
    );

    return (
      <div className="route options">
          <h1>Your Basket</h1>
          {productList}
          <Link className="add-another" to="/select">Pick another apple</Link>
          <div className="continue-order">
            <Link className="button" to="/order">Review Order</Link>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(Options);

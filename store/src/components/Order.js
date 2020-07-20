import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Order extends Component {
  render() {
    const summaryList = this.props.products.length ? (
      this.props.products.map(product => {
        return (
          <tr key={product.id}>
            <td>{product.name} x {product.quantity}</td>
          </tr>
        )
      })
    ) : (
      <tr>
        <td>(none)</td>
      </tr>
    );
    return (
      <div className="route order">
        <h1>Checkout</h1>
        <table>
          <thead>
            <tr>
              <th>Apples</th>
            </tr>
          </thead>
          <tbody>
            {summaryList}
          </tbody>
        </table>
        <Link className="add-another" to="/options">Back to basket</Link>
        <div className="continue-submit">
          <Link className="button" to="/">Complete Order</Link>
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

export default connect(mapStateToProps)(Order);

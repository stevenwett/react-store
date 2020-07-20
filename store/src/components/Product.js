import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProduct, editProduct } from '../actions/ProductActions'

class Product extends Component {
  state = this.props.product;

  handleChange = (e) => {
    let value = parseInt(e.target.value);
    this.setState({
      quantity: value
    }, () => {
      this.props.editProduct(this.state)
    });
    if(0 === value) {
      this.props.deleteProduct(this.state.id)
    }
    e.preventDefault();
  }

  render() {
    return (
      <article className="product row no-gutters">
        <div className="col-7">
          <h2>{ this.state.name }</h2>
        </div>
        <div className="col-5 text-right">
          <label htmlFor="quantity">Qty</label>
          <select value={this.state.quantity} onChange={ this.handleChange }>
            <option value="0" className="none">0 (delete)</option>
            <option value="1" className="none">1</option>
            <option value="2" className="none">2</option>
            <option value="3" className="none">3</option>
            <option value="4" className="none">4</option>
            <option value="5" className="none">5</option>
          </select>
        </div>
      </article>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.product.id;
  return {
    product: state.products.find(product => product.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => dispatch(deleteProduct(id)),
    editProduct: (product) => dispatch(editProduct(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)

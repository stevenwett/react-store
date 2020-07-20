import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../actions/ProductActions'

class ProductSelect extends Component {
  state = {
    slug: null,
    name: null
  }

  handleClick = (e) => {
    this.setState({
      slug: e.target.value,
      name: document.querySelector('#' + e.target.value).dataset.name
    }, this.proceed );
    
    e.preventDefault();
  }

  proceed = () => {
    this.props.addProduct(this.state);
    this.props.history.push("/options");
  }

  render() {
    return (
      <div className="route product-select">
        <h1>Pick an Apple</h1>
        <div className="row">
          <div className="col-6">
            <button id="rave" className="button" value="rave" data-name="Rave" onClick={ this.handleClick }>Rave</button>
          </div>
          <div className="col-6">
            <button id="honeygold" className="button" value="honeygold" data-name="Honeygold" onClick={ this.handleClick }>Honeygold</button>
          </div>
          <div className="col-6">
            <button id="haralson" className="button" value="haralson" data-name="Haralson" onClick={ this.handleClick }>Haralson</button>
          </div>
          <div className="col-6">
            <button id="keepsake" className="button" value="keepsake" data-name="Keepsake" onClick={ this.handleClick }>Keepsake</button>
          </div>
          <div className="col-6">
            <button id="prairie-spy" className="button" value="prairie-spy" data-name="Prairie Spy" onClick={ this.handleClick }>Prairie Spy</button>
          </div>
          <div className="col-6">
            <button id="honeycrisp" className="button" value="honeycrisp" data-name="Honeycrisp" onClick={ this.handleClick }>Honeycrisp</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => dispatch(addProduct(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSelect)

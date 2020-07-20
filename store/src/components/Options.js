import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Line from './Line';
import { addLine } from '../actions/LineActions'

class Options extends Component {
  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addLine(this.state.text);
  }

  render() {
    const { lines } = this.props 
    const lineList = lines.length ? (
      lines.map(line => {
        return (
          <div className="line-wrapper" key={line.id}>
            <Line line={line} />
          </div>
        )
      })
    ) : (
      <div className="no-lines">No apples chosen</div>
    );

    return (
      <div className="route options">
          <h1>Your Basket</h1>
          {lineList}
          <Link className="add-another" to="/product-line">Pick another apple</Link>
          {/*
          <form className="add-line" onSubmit={ this.handleSubmit }>
            <label htmlFor="text">New line text</label>
            <input type="text" id="text" onChange={ this.handleChange } />
            <button className="button">
              Add Line
            </button>
          </form>
          */}

          <div className="continue-order">
            <Link className="button" to="/order">Review Order</Link>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lines: state.lines
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addLine: (text) => dispatch(addLine(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);

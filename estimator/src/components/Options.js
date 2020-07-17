import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Line from './Line';

class Options extends Component {
  render() {
    const { lines } = this.props 
    const lineList = lines.length ? (
      lines.map(line => {
        return (
          <Line line={line} />
        )
      })
    ) : (
      <div>No lines</div>
    );

    return (
      <div className="options">
          <h1>Simple Estimator</h1>
          <p>Please add your lines</p>
          {lineList}
          <div className="continue-order">
            <Link className="button" to="/order">Proceed to Order</Link>
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

export default connect(mapStateToProps)(Options);

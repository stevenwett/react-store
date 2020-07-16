import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Options extends Component {
  render() {
    console.log(this.props);
    const { lines } = this.props 
    const lineList = lines.length ? (
      lines.map(line => {
        return (
          <div className="line" key={line.id}>
            <label htmlFor="text">Line Text</label>
            <input htmlFor="text" />
          </div>
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
          {/*
          <AddLine addLine={ appState.addLine } />
        */}
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

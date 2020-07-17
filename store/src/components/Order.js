import React, { Component } from 'react'
import { connect } from 'react-redux'

class Order extends Component {
  render() {
    const summaryList = this.props.lines.length ? (
      this.props.lines.map(line => {
        return (
          <tr key={line.id}>
            <td>{line.text}</td>
          </tr>
        )
      })
    ) : (
      <tr>
        <td>No lines</td>
      </tr>
    );
    return (
      <div className="Order">
        <h1>Your Summary</h1>
        <table>
          <thead>
            <tr>
              <th>Lines</th>
            </tr>
          </thead>
          <tbody>
            {summaryList}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    lines: state.lines
  }
}

export default connect(mapStateToProps)(Order);

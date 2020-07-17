import React, { Component } from 'react'
import { connect } from 'react-redux'

class Line extends Component {
  handleClick = () => {
    this.props.deleteLine(this.props.line.id);
  }
  render() {
    console.log(this.props);
    return (
      <div className="line" key={this.props.line.id}>
        <label htmlFor="text">Line Text</label>
        <input htmlFor="text" value={this.props.line.text}/>
        <button className="button" onClick={this.handleClick}>
          Delete Line
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.line.id;
  return {
    line: state.lines.find(line => line.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteLine: (id) => dispatch({type: 'DELETE_LINE', id: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Line)

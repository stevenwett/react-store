import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteLine, editLine } from '../actions/LineActions'

class Line extends Component {
  state = this.props.line;

  handleClick = (e) => {
    e.preventDefault();
    this.props.deleteLine(this.state.id);
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      text: e.target.value
    }, () => {
      this.props.editLine(this.state);
    });
  }
  render() {
    return (
      <div className="line">
        <label htmlFor="text">Line Text</label>
        <input type="text" value={this.state.text} onChange={ this.handleChange }/>
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
    deleteLine: (id) => dispatch(deleteLine(id)),
    editLine: (line) => dispatch(editLine(line))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Line)

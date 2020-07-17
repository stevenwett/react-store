import React, { Component } from 'react';

class AddLine extends Component {
  state = {
    text: '',
    id: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addLine(this.state)
  }
  render() {
    return (
      <div>
        <form className="add-line" onSubmit={ this.handleSubmit }>
          <label htmlFor="text">Line Text</label>
          <input type="text" id="text" onChange={ this.handleChange } />
          <button>Add line</button>
        </form>
      </div>
    )
  }
}

export default AddLine;

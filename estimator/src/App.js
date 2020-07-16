import React, { Component } from 'react';
import Lines from './Lines';
import AddLine from './AddLine';

class App extends Component {
  state = {
    lines : [
      {
        text: 'Example sign text',
        id: Math.random()
      }
    ]
  }
  addLine = (line) => {
    line.id = Math.random();
    let lines = [...this.state.lines, line];
    this.setState({
      lines: lines
    });
  }
  removeLine = (id) => {
    let lines = this.state.lines.filter(line => {
      return line.id !== id;
    });
    this.setState({
      lines: lines
    });
  }
  editLine = (text, id) => {
    const lineIndex = this.state.lines.findIndex(line => {
      return line.id === id;
    });
    let lines = [...this.state.lines];
    lines[lineIndex]["text"] = text;
    this.setState({
      lines: lines
    });
  }
  render() {
    return (
      <div className="app">
        <h1>Simple Estimator</h1>
        <p>Please add your lines</p>
        <Lines removeLine={ this.removeLine } editLine={ this.editLine } lines={ this.state.lines } />
        <AddLine addLine={ this.addLine } />
      </div>
    );
  }
}

export default App;

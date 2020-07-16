import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductLine from './components/ProductLine';
import Options from './components/Options';
import Order from './components/Order';


class App extends Component {
  state = {
    productLine : '',
    lines : [
      { text: '', id: 1 },
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
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/product-line' component={ProductLine}/>
            <Route path='/options' component={Options}/>
            <Route path='/order' component={Order}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

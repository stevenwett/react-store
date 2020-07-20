import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductSelect from './components/ProductSelect';
import Options from './components/Options';
import Order from './components/Order';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/select' component={ProductSelect}/>
              <Route path='/options' component={Options}/>
              <Route path='/order' component={Order}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

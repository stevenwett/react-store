import React from 'react';
import { Link } from 'react-router-dom';
import Lines from './Lines';
import AddLine from './AddLine';

function Options(props) {
  return (
    <div className="options">
        <h1>Simple Estimator</h1>
        <p>Please add your lines</p>
        {/*
        <Lines removeLine={ appState.removeLine } editLine={ appState.editLine } lines={ appState.lines } />
        <AddLine addLine={ appState.addLine } />
      */}
        <div className="continue-order">
          <Link className="button" to="/order">Proceed to Order</Link>
        </div>
    </div>
  )
}

export default Options;

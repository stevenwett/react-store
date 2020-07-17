import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div className="order">
      <h1>Welcome to the print shop!</h1>
      <Link className="button" to="/product-line">Enter</Link>
    </div>
  )
}

export default Home;

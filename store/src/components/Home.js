import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div className="route home">
      <h1>Welcome to the Apple Store!</h1>
      <Link className="button" to="/product-line">Start Shopping</Link>
    </div>
  )
}

export default Home;

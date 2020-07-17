import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch(state) {
  return (
    <div className="404">
      <h1>Page Not Found</h1>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default NoMatch;

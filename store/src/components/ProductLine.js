import React from 'react';
import { Link } from "react-router-dom";

function ProductLine(props) {
  return (
    <div className="route product-line">
      <h1>Pick an Apple</h1>
      <ul>
        <li>
          <Link className="button" value="rave" to="/options">Rave</Link>
        </li>
        <li>
          <Link className="button" value="sweetango" to="/options">SweeTango</Link>
        </li>
        <li>
          <Link className="button" value="zestar" to="/options">Zestar!</Link>
        </li>
        <li>
          <Link className="button" value="sweet-sixteen" to="/options">Sweet Sixteen</Link>
        </li>
        <li>
          <Link className="button" value="honeycrisp" to="/options">Honeycrisp</Link>
        </li>
        <li>
          <Link className="button" value="haralson" to="/options">Haralson</Link>
        </li>
      </ul>
    </div>
  )
}

export default ProductLine;

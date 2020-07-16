import React from 'react';
import { Link } from "react-router-dom";

function ProductLine(props) {
  return (
    <div className="product-line">
      <h1>Please select a product line</h1>
      <ul>
        <li>
          <Link className="button" value="flat-cut-metal" to="/options">Flat Cut Metal</Link>
        </li>
      </ul>
    </div>
  )
}

export default ProductLine;

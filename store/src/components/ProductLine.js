import React from 'react';
import { Link } from "react-router-dom";

function ProductLine(props) {
  return (
    <div className="product-line">
      <h1>Please select a product</h1>
      <ul>
        <li>
          <Link className="button" value="sunglasses" to="/options">Screen Printing</Link>
        </li>
      </ul>
    </div>
  )
}

export default ProductLine;

import React from 'react';
import { Link } from "react-router-dom";

function ProductLine(props) {
  return (
    <div className="route product-line">
      <h1>Please select a product</h1>
      <ul>
        <li>
          <Link className="button" value="digital" to="/options">Digital Printing</Link>
        </li>
        <li>
          <Link className="button" value="offset" to="/options">Offset Printing</Link>
        </li>
      </ul>
    </div>
  )
}

export default ProductLine;

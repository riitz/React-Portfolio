import React from 'react';
import "./product.css";
import Img from "../../img/fullPage.png"

const Product = () => {
  return (
    <div className='p'>
        <div className="p-browser">
          <div className="p-circle">
            <div className="img-1">
              <img src={Img} alt="" />
            </div>
          </div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
    </div>
  )
}

export default Product
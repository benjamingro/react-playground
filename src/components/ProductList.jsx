import React from "react";
import Product from "./Product.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList} from '@fortawesome/free-solid-svg-icons';

import Button from "react-bootstrap/Button";


function ProductList({ productList,increment_Incart,replenish }) {

  return (
    <>
      <div className="card">
        <div className="card-header" style={{fontWeight:"bold"}}>
          <div className="row w-100">
            <div className="col-lg-6 align-self-center">
              Product list&nbsp;&nbsp;<FontAwesomeIcon icon={faList} className="mt-1"/>
            </div>
            <div className="col-lg-6 align-self-center d-flex justify-content-end">
              <Button variant="secondary" onClick={()=>{replenish()}}>Replenish stock</Button>
            </div>
          </div>
          
          </div>
        <div className="card-body">
          <div className="row w-100"></div>
          <>
            {/* header row */}
            <div className="row w-100">
              <div className="col-lg-2 align-self-center">
                {/* product picture column */}
              </div>
              <div className="col-lg-2 pr-0 align-self-center">
                {/* product name column */}
                Name
              </div>
              <div className="col-lg-3 align-self-center">
                {/* {product.Country} */}
                Origin
              </div>
              <div className="col-lg-2 px-0 align-self-center">
                {/* {product.Price} {product.Price_unit} */}
                Price
              </div>
              <div className="col-lg-3 align-self-center">
                {/* {product.Instock} {product.Instock_unit} */}
                Qty available
              </div>
            </div>
            {/* border below title row */}
            <div className="row w-100 border">
              <div className="col"></div>
            </div>
            <div style={{ maxHeight: "300px", overflowY: "scroll", overflowX:"hidden" }}>
              {productList.map((product, index) => {
                return (
                  <>
                    <Product key={"product_"+index} product={product} increment_Incart={increment_Incart}/>
                    {index !== productList.length - 1 ? (
                      <div className="row w-100 pl-4 pr-0">
                        <div className="col border"></div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                );
              })}
            </div>
          </>

          {/* {JSON.stringify(productList)} */}
        </div>
      </div>
    </>
  );
}

export default ProductList;

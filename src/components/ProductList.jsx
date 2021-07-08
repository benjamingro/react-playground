import React from "react";
import Product from "./Product.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList} from '@fortawesome/free-solid-svg-icons';

function ProductList({ productList,addToShoppingCart }) {
  return (
    <>
      <div className="card">
        <div className="card-header d-flex justify-content-center" style={{fontWeight:"bold"}}>Product list&nbsp;&nbsp;<FontAwesomeIcon icon={faList} className="mt-1"/></div>
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
                    <Product key={"product_"+index} product={product} addToShoppingCart={addToShoppingCart}/>
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

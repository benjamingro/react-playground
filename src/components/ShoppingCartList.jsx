import React from "react";
import ShoppingCartItem from "./ShoppingCartItem.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

function ShoppingCartList({
  productList,
  decrement_Incart,
  cartTotal,
  checkout,
  itemsInCart,
}) {
  return (
    <>
      <div className="card">
        <div className="card-header" style={{ fontWeight: "bold" }}>
          <div className="row w-100">
            <div className="col-lg-6 align-self-center">
              Cart&nbsp;&nbsp;
              <FontAwesomeIcon icon={faShoppingCart} className="mt-1" />
              &nbsp;&nbsp;
              <span className="badge badge-secondary" style={{fontSize:"medium"}}>{itemsInCart}</span>
            </div>
            {/* <div className="col-lg-3 align-self-center">
              
            </div> */}
            <div className="col-lg-3 align-self-center">
              Total ${(Math.round(cartTotal * 100) / 100).toFixed(2)}
            </div>
            <div className="col-lg-3 align-self-center">
              <Button variant="primary" onClick={() => {if(itemsInCart>=1) {checkout()}}} className={itemsInCart<1?'disabled':''}>
                Checkout
              </Button>
            </div>
          </div>
        </div>
        {productList.filter((item) => item.Incart > 0).length > 0 && (
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
                  Qty in cart
                </div>
                <div className="col-lg-2 px-0 align-self-center">
                  {/* {product.Price} {product.Price_unit} */}
                  Price
                </div>
                <div className="col-lg-3 align-self-center">
                  {/* {product.Instock} {product.Instock_unit} */}
                  Subtotal
                </div>
              </div>
              {/* border below title row */}
              <div className="row w-100 border">
                <div className="col"></div>
              </div>
              <div
                style={{
                  maxHeight: "300px",
                  overflowY: "scroll",
                  overflowX: "hidden",
                }}
              >
                {productList
                  .filter((item) => item.Incart > 0)
                  .map((product, index) => {
                    return (
                      <>
                        <ShoppingCartItem
                          key={"cartItem_" + index}
                          product={product}
                          decrement_Incart={decrement_Incart}
                        />
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
        )}
        {productList.filter((item) => item.Incart > 0).length === 0 && (
          <div className="card-body text-secondary">
            There are currently no items in your cart
          </div>
        )}
      </div>
    </>
  );
}

export default ShoppingCartList;

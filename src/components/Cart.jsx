import React from "react";
import ProductList from "./ProductList.jsx";
import ShoppingCartList from "./ShoppingCartList.jsx";
import Button from "react-bootstrap/Button";

const axios = require("axios").default;

function Cart() {
  const [productList, setProductList] = React.useState([]);
//   const [shoppingCart, setShoppingCart] = React.useState([]);
  const [cartTotal, setCartTotal] = React.useState(0);
  const [itemsInCart,setItemsInCart] = React.useState(0);

  const [busy, setBusy] = React.useState(true);
  const [successfulCheckout, setSuccessfulCheckout] = React.useState(false);
  const [successfulReplenish, setSuccessfulReplenish] = React.useState(false);


  const [cartHeight, setCartHeight] = React.useState(200);

  const increment_Incart = (product) => {
    let updated_productList = productList.slice();
    let item_counter = 0; 

    updated_productList.forEach((item) => {
      if (item.ProductName === product.ProductName) {
        item.Incart = item.Incart + 1;
        item_counter += item.Incart; 
      }
      else{
        item_counter += item.Incart;
      }
    });
    setProductList(updated_productList);
    setItemsInCart(item_counter); 

  };

  const decrement_Incart = (product) => {
    let updated_productList = productList.slice();
    let item_counter = 0;

    updated_productList.forEach((item) => {
      if (item.ProductName === product.ProductName) {
        item.Incart = item.Incart - 1;
        item_counter += item.Incart;
      }
      else{
        item_counter += item.Incart;
      }
    });
    setProductList(updated_productList);
    setItemsInCart(item_counter);
  };

  React.useEffect(() => {
    let accumulator = 0;
    const filtered_productList = productList.filter((item) => item.Incart > 0);
    filtered_productList.forEach((item) => {
      accumulator += item.Incart * item.Price;
    });
    setCartTotal(accumulator);
  });

  // initializer function
  React.useEffect(() => {
    function getProductList() {
      setBusy(true);
      // const getProductList_url = "https://mit-xpro-319116.uc.r.appspot.com/allproducts";
      // graphql implementation: 
      const getProductList_url = "https://mit-xpro-319116.uc.r.appspot.com/graphql?query={ProductList{ProductName,Price,Price_unit,Instock,Instock_unit,Country,ImageUrl}}";

      axios
        .get(getProductList_url)
        .then((response) => {
          // response.data.forEach((item) => (item["Incart"] = 0));
          // setProductList(response.data);
          // graphql implementation: 
          response.data.data.ProductList.forEach((item) => (item["Incart"] = 0));
          setProductList(response.data.data.ProductList);
          setBusy(false);
        })
        .catch((error) => {
          alert(JSON.stringify(error));
          setBusy(false);
        });
    }

    getProductList();
  }, []);

  const update_setCartHeight = () => {
    const cartHeight = document.getElementById("cart").clientHeight;
    setCartHeight(cartHeight);
  };

  const checkout = () => {
    update_setCartHeight();
    setBusy(true);
    const filtered_productList = productList.filter((item) => item.Incart > 0);
    const checkout_url = "https://mit-xpro-319116.uc.r.appspot.com/checkout";
    axios
      .post(checkout_url, filtered_productList)
      .then((response) => {
        response.data.forEach((item) => (item["Incart"] = 0));
        setProductList(response.data);
        setBusy(false);
        setSuccessfulCheckout(true);
        setItemsInCart(0);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        setBusy(false);
      });
  };

  const replenish = () => {
    update_setCartHeight();
    setBusy(true);

    const replenish_url = "https://mit-xpro-319116.uc.r.appspot.com/replenish";
    axios
      .get(replenish_url)
      .then((response) => {
        response.data.forEach((item) => (item["Incart"] = 0));
        setProductList(response.data);
        setBusy(false);
        setSuccessfulReplenish(true);
        setItemsInCart(0);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        setBusy(false);
      });
  };

  return (
    <>
      {!busy && !successfulCheckout && !successfulReplenish && (
        <div className="row w-100" id="cart">
          <div className="col-lg-6 py-1 pr-0">
            {/* Product List */}
            <ProductList
              productList={productList}
              increment_Incart={increment_Incart}
              replenish={replenish}
            />
          </div>
          <div className="col-lg-6 py-1 pr-0">
            {/* Shopping Cart */}
            <ShoppingCartList
              productList={productList}
              decrement_Incart={decrement_Incart}
              cartTotal={cartTotal}
              checkout={checkout}
              itemsInCart={itemsInCart}
            />
          </div>
          <div className="col-lg-4"></div>
        </div>
      )}
      {busy && !successfulCheckout && !successfulReplenish && (
        <div className="row w-100" style={{ height: `${cartHeight}px` }}>
          <div className="col d-flex justify-content-center align-self-center">
            <h2>Loading...</h2>
          </div>
        </div>
      )}
      {successfulCheckout && (
        <div className="row w-100" style={{ height: `${cartHeight}px` }}>
          <div className="col ">
            <div className="row w-100">
              <div className="col d-flex justify-content-center align-self-center">
                <h2>Successfully purchased your items. </h2>
              </div>
            </div>
            <div className="row w-100">
              <div className="col d-flex justify-content-center align-self-center">
                <Button variant="primary" onClick={()=>{setSuccessfulCheckout(false)}}>Ok</Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {successfulReplenish && (
        <div className="row w-100" style={{ height: `${cartHeight}px` }}>
          <div className="col ">
            <div className="row w-100">
              <div className="col d-flex justify-content-center align-self-center">
                <h2>Successfully replenished inventory. </h2>
              </div>
            </div>
            <div className="row w-100">
              <div className="col d-flex justify-content-center align-self-center">
                <Button variant="primary" onClick={()=>{setSuccessfulReplenish(false)}}>Ok</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;

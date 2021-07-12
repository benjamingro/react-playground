import React from "react";
import ProductList from "./ProductList.jsx";
import ShoppingCartList from "./ShoppingCartList.jsx";
import Button from "react-bootstrap/Button";

const axios = require("axios").default;

function Cart() {
  const [productList, setProductList] = React.useState([]);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [cartTotal, setCartTotal] = React.useState(0);

  const increment_Incart = (product) => {
    let updated_productList = productList.slice();
    updated_productList.forEach((item) => {
      if (item.ProductName === product.ProductName) {
        item.Incart = item.Incart + 1;
      }
    });
    setProductList(updated_productList);
  };

  const decrement_Incart = (product) => {
    let updated_productList = productList.slice();
    updated_productList.forEach((item) => {
      if (item.ProductName === product.ProductName) {
        item.Incart = item.Incart - 1;
      }
    });
    setProductList(updated_productList);
  };

  React.useEffect(() => {
    let accumulator = 0;
    const filtered_productList = productList.filter((item) => item.Incart > 0);
    filtered_productList.forEach((item) => {
      accumulator += item.Incart * item.Price;
    });
    setCartTotal(accumulator);
  });

  React.useEffect(() => {
    function getProductList() {
      const getProductList_url =
        "https://mit-xpro-319116.uc.r.appspot.com/allproducts";

      axios
        .get(getProductList_url)
        .then((response) => {
          response.data.forEach((item) => (item["Incart"] = 0));
          setProductList(response.data);
        })
        .catch((error) => {
          alert(JSON.stringify(error));
        });
    }
    getProductList();
  }, []);

  const checkout = () => {
    const filtered_productList = productList.filter((item) => item.Incart > 0);
    const checkout_url = "https://mit-xpro-319116.uc.r.appspot.com/checkout";
    axios
      .post(checkout_url, filtered_productList)
      .then((response) => {

        response.data.forEach((item) => (item["Incart"] = 0));
        setProductList(response.data);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  };

  const replenish = () => {
    alert("inside replenish");
    const replenish_url = "https://mit-xpro-319116.uc.r.appspot.com/replenish";
    axios
      .get(replenish_url)
      .then((response) => {

        response.data.forEach((item) => (item["Incart"] = 0));
        setProductList(response.data);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  };

  return (
    <>
      <div className="row w-100">
        <div className="col-lg-6">
          {/* Product List */}
          <ProductList
            productList={productList}
            increment_Incart={increment_Incart}
            replenish={replenish}
          />
        </div>
        <div className="col-lg-6">
          {/* Shopping Cart */}
          <ShoppingCartList
            productList={productList}
            decrement_Incart={decrement_Incart}
            cartTotal={cartTotal}
            checkout={checkout}
          />
        </div>
        <div className="col-lg-4"></div>
      </div>
    </>
  );
}

export default Cart;

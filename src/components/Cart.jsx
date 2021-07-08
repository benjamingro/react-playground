import React from 'react';
import ProductList from './ProductList.jsx'
import ShoppingCartList from './ShoppingCartList.jsx'

const axios = require('axios').default;


function Cart(){
    const [productList,setProductList] = React.useState([]); 
    const [shoppingCart,setShoppingCart] = React.useState([]);

    const addToShoppingCart = (product) =>{
        let item_alreadyThere = shoppingCart.find(item=>
            item.ProductName===product.ProductName
        );

        if(item_alreadyThere)
        {
            let updated_shoppingCart = shoppingCart.slice(); 
            updated_shoppingCart.forEach(item=>{
                if(item.ProductName===item_alreadyThere.ProductName)
                {
                    item.Incart = item.Incart + 1; 
                    // break; 
                }
            }); 
            setShoppingCart(updated_shoppingCart); 
        }
        else
        {
            product['Incart'] = 1; 
            setShoppingCart([product,...shoppingCart]); 
        }

    };

    const decrementShoppingCart = (product) =>{
        let foundItem = shoppingCart.find(item=>item.ProductName===product.ProductName);
        let foundIndex = shoppingCart.findIndex(item=>item.ProductName===product.ProductName);

        let updated_shoppingCart = shoppingCart.slice();
        if(foundItem.Incart>1)
        { 
            updated_shoppingCart.forEach(item=>{
                if(item.ProductName===product.ProductName)
                {
                    item.Incart = item.Incart - 1; 
                }
            });

            setShoppingCart(updated_shoppingCart); 
        }
        else
        {
            
            updated_shoppingCart.splice(foundIndex,1); 
            // alert(JSON.stringify(updated_shoppingCart)); 
            setShoppingCart(updated_shoppingCart);
        }
    };

    React.useEffect(()=>{
        function getProductList(){
            const getProductList_url = "https://mit-xpro-319116.uc.r.appspot.com/allproducts";
            // const getProductList_url = "https://mit-xpro-319116.uc.r.appspot.com";

            axios.get(getProductList_url).then(response => {
                setProductList(response.data);
                // alert(`received data ${response}`); 
                
            }).catch(error => {
                
                alert(JSON.stringify(error));
            });
        }
        getProductList(); 
    },[]);

    return(
        <>
            <div className="row w-100">

                <div className="col">
                    Checkout row
                </div>
            </div>
            <div className="row w-100">
                <div className="col-lg-6">
                    {/* Product List */}
                    <ProductList productList={productList} addToShoppingCart={addToShoppingCart}/>
                </div>
                <div className="col-lg-6">
                    {/* Shopping Cart */}
                    <ShoppingCartList shoppingCart={shoppingCart} decrementShoppingCart={decrementShoppingCart}/>
                </div>
                <div className="col-lg-4">
                </div>
            </div>
        </>
    )
}

export default Cart
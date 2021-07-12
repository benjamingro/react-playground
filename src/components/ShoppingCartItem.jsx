import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';


function ShoppingCartItem({product,decrement_Incart}){
    return(
        <>
            <div className="row w-100 my-2">
                <div className="col-lg-2 align-self-center">
                    <img src={product.ImageUrl} style={{maxWidth:"65px"}}/>
                </div>
                <div className="col-lg-2 pr-0 align-self-center">
                    {product.ProductName}
                </div>
                <div className="col-lg-3 align-self-center">
                    {product.Incart}
                </div>
                <div className="col-lg-2 px-0 align-self-center">
                    {(Math.round(product.Price * 100) / 100).toFixed(2)} {product.Price_unit}
                </div>
                <div className="col-lg-2 align-self-center">
                    ${(Math.round((product.Price*product.Incart) * 100) / 100).toFixed(2)}
                </div>
                <div className="col-lg-1 px-0 align-self-center">
                    <Button variant="link" style={{fontSize:"1.8rem"}} onClick={()=>{decrement_Incart(product)}}><FontAwesomeIcon icon={faCartArrowDown} /></Button>
                    {/* className="" style={{color:player1Color}} */}
                </div>
            </div>
        </>
    )
}

export default ShoppingCartItem;
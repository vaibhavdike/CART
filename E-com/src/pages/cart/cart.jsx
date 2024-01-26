import { useContext } from "react";
import { PRODUCT } from "../../products";
// import Product from "../product";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import './cart.css';
function Cart(){
    const {cartItems} = useContext(ShopContext);
    return(
        <div>
            <div>
                <h1>Cart Items</h1>
            </div>
            <div className="singleItem">
                {PRODUCT.map((product)=>{ 
                        if(cartItems[product.id] !==0){
                           return <CartItem data ={product} />
                        }
                        // return `<h1>some proplem</h1>`
                })}
            </div>
        </div>
    )
    }

export default Cart;
import '../pages/product.css';
import {ShopContext } from '../context/shop-context';
import { useContext } from 'react';
function Product(props){
    const{id,productName, price,productImage}= props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
    return(
        <div className="card">
            <div className="imageContainer flex justify-center items-center">
                <img src={productImage} alt="" width={"600px"}></img>     
            </div>
            <div className="desciption">
                <h1>{productName}</h1>
                <h2>{price}</h2>
                <button className="b1" onClick={() => addToCart(id) }>Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>}</button>
            </div>
        </div>
        

    );
}


export default Product;
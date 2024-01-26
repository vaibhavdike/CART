import { PRODUCT } from "../products";
import Product from "./product";

function Shop(){
    return(
        <div>
            <div className="shopTitle">
                <h1>PranavTech Shop</h1>
            </div>
            
            <div className="products">
                {
                    PRODUCT.map(product=><Product
                    data = {product}>
                    </Product>)
                }
            </div>
        </div>
    )
}

export default Shop;
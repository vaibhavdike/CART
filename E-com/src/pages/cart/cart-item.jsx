export const CartItem = (props)=>{
    const{productName, price}= props.data;

    return (
        <div>
            {/* <img>{productImage}</img> */}
            <div>
                <p>
                    {""}
                    <b>{productName}</b>
                </p>
                <p>{price}</p>
            </div>
        </div>
    )
}
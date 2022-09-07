import "./ItemInCart.css";
import { useContext } from "react";

const ItemsInCart = (props) => {
    return (
    <div className="prod-cart">
         <img src={"/images/" + props.data.image} alt="product"></img>

        <h6>{props.data.title}</h6>
        <label>Qty:{props.data.quantity}</label>
        <label>Price Per Item: ${props.data.price.toFixed(2)}</label>
        <label>Total Price: ${props.data.price * props.data.quantity.toFixed(2)}</label>

        <button className='btn butn-lg btn-danger'></button>

    </div>
    );
};
export default ItemsInCart;
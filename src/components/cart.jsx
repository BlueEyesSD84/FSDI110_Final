import "./cart.css";
import { useContext } from "react";
import StoreContext from "../store/storeContext";
import ItemInCart from "./ItemInCart";

const Cart = () => {
  const cart = useContext(StoreContext).cart;

  const getTotal = () => {
    let total = 0; 
    for (let i = 0; (i < cart.length); i++) {
      let prod = cart[i];
      total += prod.quantity * prod.price.toFixed(2);
    }
    return total;
  };

  const getNumItems = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      sum += prod.quantity;
    }
    return sum;
  };

  return (
    <div className="cart">
      <h1> Welcome to your Cart</h1>
      <h5>The number of items in your cart: {getNumItems()}</h5>

      <div className="parent">
        <div className="items">
          {cart.map((prod) => (
            <ItemInCart key={prod._id} data={prod}></ItemInCart>
          ))}
        </div>
        <div className="side-menu">
          <h3>Total cost for all items is: ${getTotal().toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;

//create catalogincart component
//cart page shold map cart array into catalogincart and send the data
//catablogincart should received the data and display it

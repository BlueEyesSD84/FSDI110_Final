import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";
import StoreContext from "../store/storeContext";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  //useContext will give you access to everything in StoreContext, i.e. Product does not need that.
  const addToCart = useContext(StoreContext).addToCart;

  //to add products to cart
  const handleAddClicked = () => {
    let prodForCart = { ...props.data, quantity: quantity }; //to copy an object
    addToCart(prodForCart); //this call the function in GlobalState.jsx
  };

  const onQuantityChange = (quantity) => {
    setQuantity(quantity);
  };

  const getTotal = () => {
    let total = quantity * props.data.price;
    return total.toFixed(2);
  };

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="product"></img>

      <h5 className="product-h5">{props.data.title}</h5>
      <div className="prices">
        <label className="price">Price: ${props.data.price.toFixed(2)}</label>
        <label className="total">Total: ${getTotal()} </label>
      </div>

      <div className="controls">
        <QuantityPicker onChange={onQuantityChange} mininum="1" max="10" />
        <button onClick={handleAddClicked} className="btn btin-sm btn-success">
          Add
        </button>
      </div>
    </div>
  );
};
export default Product;

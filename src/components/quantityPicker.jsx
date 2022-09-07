
import "./quantityPicker.css";
import { useState } from "react";

const QuantityPicker = (props) => {
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        let next = quantity + 1;
        if(next >= 10)
        setQuantity("10")
        else{
        setQuantity(next);
        props.onChange(next);
        };  
    };
    const decrease = () => {
        let next = quantity - 1;
        if(next > 0) {
           setQuantity(next);
           props.onChange(next);
        }
        
    };


    return (
    <div className="qt-picker">
        <button className="btn btn-sm btn-info" onClick={increase}>+</button>
        <label className="qty">{quantity}</label>
        <button className="btn btn-sm btn-info" onClick={decrease}>-</button>
        
        </div>
    );


  };

export default QuantityPicker;

//in JSX what ever is typed inside the curly braces{} will be excuted as Javascript
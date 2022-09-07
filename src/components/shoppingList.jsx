import "./shoppingList.css";
import { useState } from "react";


const ShoppingList = () => {
    const [text, setText] = useState('');
    const [items, setItems] = useState([]);

    const save = () => {
        console.log(text);
        
        //items.push(text); do not do this
        let clone = [...items]; //to copy an object
        clone.push(text);
        setItems(clone);
    };
    const textChange = (e) => {
        let value =e.target.value;
        setText(value);
    };

   
        
    return (
        <div className="shop-list">
            <h1>Your Shopping List</h1>
        
        <div className="form">
            <label>Add to list:</label>
            <input onChange={textChange} type="text" />
            <button onClick={save}className="btn btn-sm btn-primary">Add</button>
          </div>

        <ul>
            {items.map((item) => (
                <li>{item}</li>
            ))}
        </ul>

     </div>
    );
}
export default ShoppingList;

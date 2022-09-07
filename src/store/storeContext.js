//Create the Context, which provides data but does not do implementation.

import { createContext } from "react";

//context describes the data structure
//but does not provide implementation

const StoreContext = createContext({
    cart: [],  //on object literal use colon ':',  []  denotes it is an array,no modifications can be done to cart as immutible
    user: {},  //curly braces denotes object,  

    addToCart:  () => {},
    removeFromCart: () => {},
});



export default StoreContext;

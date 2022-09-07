import "./catalog.css"
import Product from "./product"
import { useEffect, useState } from "react"; //acts the same as windows.onload, importing "useState" to be able to create a new instance of the DataService class.
import DataService from "../services/dataService"; //importing the class

const Catalog = () => {
    const [products, setProducts] = useState([]);//using an array for the products empty [] inside ().
    const [categories, setCategories] = useState([]);

    

    const loadData = async () => {
        let service = new DataService(); //creating a new instance named "service" of the class DataService.
        let prods = await service.getCatalog();//defining the object "prods" using the instance "service".
        setProducts(prods);

        let uniques = [];
        for (let i = 0; i < prods.length; i++) {
          let prod = prods[i];
          // if the category does NOT exist in the uniques array, add it
          if (!uniques.includes(prod.category)) {
            uniques.push(prod.category);
          }
        }
        setCategories(uniques);
    };

useEffect(() => {
    loadData();

}, []);

    return (
        <div className="catalog">
<h1>JA JA Designs</h1>

<div className="uniques">
    <h4 className="catList">Category List</h4>
    {categories.map((cat) => (
        <button key={cat} className='btn btn-sm btn-success'>{cat}</button>
    ))}
</div>

<div className='product-list'>
{ products.map(prod => //using .map to "transform into products" kinda like a for loop and used for an array.
    <Product key={prod._id} data= {prod} ></Product>//passing product information to catalog
    
    )}
    </div>
</div>

    );
};

export default Catalog;
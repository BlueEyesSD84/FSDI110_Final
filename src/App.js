import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import AboutMe from './components/aboutMe';
import Catalog from './components/catalog';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ShoppingList from './components/shoppingList'
import Home from './components/home';
import Cart from './components/cart';
import Admin from './components/admin';
import GlobalState from "./store/globalState";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

//BrowserRouter is a wrapper component.
function App() {
  return (
    <div className="App">
    <GlobalState>  
      <BrowserRouter>
      <NavBar />

    <div className="main">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/List" element={<ShoppingList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        
      </Routes>
      </div>

      <Footer></Footer>
      </BrowserRouter>
    </GlobalState>
    </div>
  );
}

export default App;

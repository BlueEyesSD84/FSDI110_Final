import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
        <div className="banner-1">
            <div className="banner-text">
      <h1> Welcome to JAJA Designs</h1>
      </div>
      <img src="/images/studio.png" alt="" />
      </div>
    
    <Link className="btn btn-lg btn-dark" to="/catalog" >Click here to access our catalog</Link>
    </div>
   );
};


export default Home;

/**
 * 
 * create a cart componet
 * register on ap.js a route for /card to display cart component
 * 
 * modify navbar to add link to /car
 */
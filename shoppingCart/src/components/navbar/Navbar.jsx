/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Navbar.css";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar({addedToCart , setAddedToCart}) {
  
  return (
    <nav>
      <p>
        <Link to="/">home</Link>
      </p>
      <p className="bag">
        <Link to='/cart'>
          <BsCart4 color="white" size="30px" />
        </Link>
        {addedToCart > 0 && <span>{addedToCart}</span>}
      </p>
    </nav>
  );
}

export default Navbar;

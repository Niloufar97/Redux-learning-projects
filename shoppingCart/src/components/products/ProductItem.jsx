/* eslint-disable react/prop-types */
import "./ProductItem.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function ProductItem( data ) {
  const { name,price,image,} = data;

  const { dispatch } = useContext(AppContext);

  const addToCartHandler = () => {
    dispatch({type : 'ADD_TO_CART' , data})
  };
  
  return (
    <div className="productCard">
      <div className="cardImage">
        <img className="img-fluid" src={image} />
      </div>
      <div className="cardBody">
        <h5>{name}</h5>
        <p className="price">price : {price.toLocaleString()}</p>
        <button onClick={addToCartHandler} className="btn btn-primary">
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;

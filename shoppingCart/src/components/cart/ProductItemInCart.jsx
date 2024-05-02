/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./ProductItemInCart.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AppContext } from "../../context/AppContext";

function ProductItemInCart({
  id,
  name,
  image,
  count,
  totalPrice,
}) {

  const {dispatch} = useContext(AppContext)

  const decreaseHandler = () => {
    dispatch({type:'DECREASE_IN_CART' , id})
  };
  const increaseHandler = () => {
    dispatch({type:'INCREASE_IN_CART' , id})
  };

  const removeFromCartHandler = () => {
    dispatch({type:"REMOVE_FROM_CART" , id})
  }

  return (
    <div className="productItemInCart">
      <div className="cardLeft">
        <img src={image} />
      </div>

      <div className="cardMiddle">
        {count > 1 ? (
          <button onClick={decreaseHandler}>-</button>
        ) : (
          <button onClick={removeFromCartHandler}>
            <RiDeleteBin6Line />
          </button>
        )}
        <span>{count}</span>
        <button onClick={increaseHandler}>+</button>
      </div>

      <div className="cardRight">
        <h5>{name}</h5>
        <p>price : {totalPrice.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default ProductItemInCart;

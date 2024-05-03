
import { useSelector } from "react-redux";

import "./Cart.css";
import ProductItemInCart from "./ProductItemInCart";

function Cart() {
  const {addedToCart, addedProducts} = useSelector(store => store)
  return (
    <div className="cartContainer">
      {addedToCart > 0 ? (
        <>
          {addedProducts.map((product) => (
            <ProductItemInCart
              key={product.id}
              {...product}
            />
          ))}
        </>
      ) : (
        <p>The shopping cart is empty</p>
      )}
    </div>
  );
}

export default Cart;

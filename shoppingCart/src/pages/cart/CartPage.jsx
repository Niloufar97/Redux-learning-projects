/* eslint-disable react/prop-types */
import Cart from "../../components/cart/Cart";
import Navbar from "../../components/navbar/Navbar";

function CartPage({
  addedToCart,
  setAddedToCart,
  addedProducts,
  setAddedProducts,
}) {
  return (
    <>
      <Navbar addedToCart={addedToCart} />
      <Cart
        addedToCart={addedToCart}
        setAddedToCart={setAddedToCart}
        addedProducts={addedProducts}
        setAddedProducts={setAddedProducts}
      />
    </>
  );
}

export default CartPage;

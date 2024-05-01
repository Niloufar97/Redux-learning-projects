import "./Cart.css";
import ProductItemInCart from "./ProductItemInCart";

function Cart({
  addedToCart,
  setAddedToCart,
  addedProducts,
  setAddedProducts,
}) {
  return (
    <div className="cartContainer">
      {addedToCart > 0 ? (
        <>
          {addedProducts.map((product) => (
            <ProductItemInCart
              key={product.id}
              {...product}
              addedProducts={addedProducts}
              setAddedProducts={setAddedProducts}
              addedToCart={addedToCart}
              setAddedToCart={setAddedToCart}
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

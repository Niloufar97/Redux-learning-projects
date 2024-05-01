/* eslint-disable react/prop-types */
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ProductsList from "../../components/products/ProductsList";

function HomePage({
  // eslint-disable-next-line react/prop-types
  addedToCart,
  setAddedToCart,
  addedProducts,
  setAddedProducts,
}) {
  return (
    <>
      <Navbar addedToCart={addedToCart} setAddedToCart={setAddedToCart} />
      <ProductsList
        addedProducts={addedProducts}
        setAddedProducts={setAddedProducts}
        addedToCart={addedToCart}
        setAddedToCart={setAddedToCart}
      />

      <Footer />
    </>
  );
}

export default HomePage;

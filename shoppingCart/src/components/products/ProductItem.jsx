/* eslint-disable react/prop-types */
import "./ProductItem.css";
import productsList from "../../db";

function ProductItem({
  id,
  name,
  price,
  image,
  addedToCart,
  setAddedToCart,
  addedProducts,
  setAddedProducts,
}) {
  const addToCartHandler = () => {

    if(isProductExistInCart()){
      const updateAddedProducts = [...addedProducts]
      updateAddedProducts.map(product => {
        if(product.id == id){
          product.count += 1
          product.totalPrice = product.count * product.price
        }
        setAddedProducts(updateAddedProducts)
        return
      })

    }else{
      setAddedToCart(addedToCart + 1);
      const product = productsList.find((product) => product.id == id);
      product.count = 1;
      product.totalPrice = product.price * product.count;
      setAddedProducts( prevState => [...prevState , product ]);
    }
  };


  const isProductExistInCart = () => {
    return addedProducts.some(product => product.id == id)
  }

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

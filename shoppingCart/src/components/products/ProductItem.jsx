import "./ProductItem.css";

// eslint-disable-next-line react/prop-types
function ProductItem({ name, price, image }) {
  return (
    <div className="productCard">
      <div className="cardImage">
        <img className="img-fluid" src={image} />
      </div>
      <div className="cardBody">
        <h5>{name}</h5>
        <p className="price">price : {price.toLocaleString()}</p>
        <button className="btn btn-primary">add to cart</button>
      </div>
    </div>
  );
}

export default ProductItem;

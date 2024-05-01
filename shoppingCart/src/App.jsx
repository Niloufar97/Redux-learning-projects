import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/CartPage";
import { useState } from "react";
function App() {
  const [addedToCart, setAddedToCart] = useState(0);
  const [addedProducts, setAddedProducts] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                addedToCart={addedToCart}
                setAddedToCart={setAddedToCart}
                addedProducts={addedProducts}
                setAddedProducts={setAddedProducts}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                addedToCart={addedToCart}
                setAddedToCart={setAddedToCart}
                addedProducts={addedProducts}
                setAddedProducts={setAddedProducts}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

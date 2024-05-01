/* eslint-disable react-refresh/only-export-components */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/CartPage";
import AppProvider from "./context/AppContext";


function App() {


  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          </AppProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

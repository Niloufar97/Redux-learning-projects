/* eslint-disable react/prop-types */
import { useState, createContext} from "react"
export const AppContext = createContext()

function AppProvider({children}) {
    const [addedToCart, setAddedToCart] = useState(0);
    const [addedProducts, setAddedProducts] = useState([]);
    const contextValue = {addedToCart, setAddedToCart, addedProducts, setAddedProducts}
  return (
    <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider;

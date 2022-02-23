import { createContext, useState } from "react";
import "./App.css";
import Layout from "./layout/Layout";
import ScrollToTop from "./methods/scrollTo/ScrollToTop";
export const CartContext = createContext();

function App() {
  const [cart, updateCart] = useState([]);
  const context = {
    value: cart,
    dispatch: (parm) => updateCart([...cart, parm]),
  };

  return (
    <CartContext.Provider value={context}>
      <div className="app bg-primary-50">
        <ScrollToTop />
        <Layout />
      </div>
    </CartContext.Provider>
  );
}

export default App;

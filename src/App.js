import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductInfo from "./Compoments/ProductInfo/ProductInfo";
import Cart from "./Compoments/Cart/Cart";
import Home from "./Compoments/Home/Home";
import { lazy, Suspense, useEffect } from "react";
import CartProvider from "./context/CartContext";
import ScrollToTop from "./utils/ScrollToTop";
import SubHome from "./Compoments/SubHome/SubHome";
import Sidebar from "./Compoments/Sidebar/Sidebar";

function App() {
  // const Sidebar = lazy(() => import("./Compoments/Sidebar/Sidebar"));

  return (
    <CartProvider>
      <Router basename="/">
        <ScrollToTop />
          <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product/:id">
            <ProductInfo />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/:slug">
            <SubHome />
          </Route>
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;

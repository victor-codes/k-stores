import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductInfo from "./Compoments/ProductInfo/ProductInfo";
import Cart from "./Compoments/Cart/Cart";
import Home from "./Compoments/Home/Home";
import { lazy, Suspense } from "react";
import CartProvider from "./context/CartContext";

function App() {
  const Sidebar = lazy(() => import("./Compoments/Sidebar/Sidebar"));
  return (
    <CartProvider>
      <Router basename="/">
        <Suspense fallback={<div>Loading...</div>}>
          <Sidebar />
        </Suspense>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product">
            <ProductInfo />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/sidebar"></Route>
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;

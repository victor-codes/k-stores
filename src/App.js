import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import CartProvider from "./context/CartContext";
import ScrollToTop from "./utils/ScrollToTop";
import SubHome from "./Components/SubHome/SubHome";
import Sidebar from "./Components/Sidebar/Sidebar";
import ProductInfoProvider from "./context/DisplayContext";

function App() {
  return (
    <CartProvider>
      <ProductInfoProvider>
        <Router basename="/">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact={true} path="/product/:id">
              <ScrollToTop />
              <ProductInfo />
            </Route>
            <Route path="/cart">
              <ScrollToTop />
              <Cart />
            </Route>
            <Route path="/cloths">
              <ScrollToTop />
              <SubHome />
            </Route>
            <Route path="/shoes">
              <ScrollToTop />
              <SubHome />
            </Route>
          </Switch>
        </Router>
      </ProductInfoProvider>
    </CartProvider>
  );
}

export default App;

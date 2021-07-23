import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import CartProvider from "./context/CartContext";
import ScrollToTop from "./utils/ScrollToTop";
import SubHome from "./Components/SubHome/SubHome";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {

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

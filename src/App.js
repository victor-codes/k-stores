import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductInfo from "./Compoments/ProductInfo/ProductInfo";
import Cart from "./Compoments/Cart/Cart";
import Home from "./Compoments/Home/Home";
import Sidebar from "./Compoments/Sidebar/Sidebar";

function App() {
  return (
    <Router basename="/">
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
        <Route path="/sidebar">
          <Sidebar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

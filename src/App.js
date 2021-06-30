import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductInfo from "./Compoments/ProductInfo/ProductInfo";
import Home from "./Compoments/Home/Home";
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
      </Switch>
    </Router>
  );
}

export default App;

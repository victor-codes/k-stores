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
import api from "./utils/api.json";
import Navigation from "./Components/Navigation/Navigation";

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

            <Route path="/clothes/men">
              {/* <ScrollToTop /> */}
              <SubHome header="MEN CLOTHES" data={api.men.cloths} />
            </Route>
            <Route path="/shoes/men">
              {/* <ScrollToTop /> */}
              <SubHome header="WOMEN SHOES" data={api.men.shoes} />
            </Route>
            <Route path="/clothes/women">
              {/* <ScrollToTop /> */}
              <SubHome header="WOMEN CLOTHES" data={api.women.cloths} />
            </Route>
            <Route path="/shoes/women">
              {/* <ScrollToTop /> */}
              <SubHome header="WOMEN SHOES" data={api.women.shoes} />
            </Route>
            <Route exact={true} path="/clothes/men">
              {/* <ScrollToTop /> */}
              <ProductInfo data={api.men.cloths} />
            </Route>
            <Route path="/shoes/men/">
              {/* <ScrollToTop /> */}
              <ProductInfo data={api.men.shoes} />
            </Route>
            <Route path="/clothes/women/:slug">
              {/* <ScrollToTop /> */}
              <ProductInfo data={api.women.cloths} />
            </Route>
            <Route path="/shoes/women/:slug">
              {/* <ScrollToTop /> */}
              <ProductInfo data={api.women.shoes} />
            </Route>
            <Route path="/clothes">
              <Navigation
                path="clothes"
                menUrl="https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwY2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                womenUrl="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              />
            </Route>
            <Route path="/shoes">
              <Navigation
                path="shoes"
                menUrl="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=708&q=80"
                womenUrl="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwc2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              />
            </Route>
          </Switch>
        </Router>
      </ProductInfoProvider>
    </CartProvider>
  );
}

export default App;

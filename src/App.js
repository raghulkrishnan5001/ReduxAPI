import React from "react";
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout"
import ProductDetails from "./containers/ProductDetails";



const App = () => {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
      <Route path={"/"} element={<Login/>}></Route>
      <Route path={"/logout"} element={<Logout/>}></Route>
      <Route path={"/product"} element={<ProductListing/>}></Route>
      <Route path={"/product-details"} element={<ProductDetails/>}></Route>
      {/* <Route path ="/product/:productId" exact component={ProductDetails}/> */}
      <Route>404 Not Found !</Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

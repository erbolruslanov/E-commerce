import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header";
import Catalog from "./components/catalog";
import Cart from "./components/cart";
import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {setCatalog} from "./redux/actions/shopActions";
import ProductDetails from "./components/product-details";

function App() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setCatalog())
    }, [dispatch])
  return (
      <Router>
          <Header />
         <div className="container">
             <Switch>
                 <Route exact path="/" component={()=> <Catalog />}/>
                 <Route exact path="/cart" component={()=> <Cart />}/>
                 <Route exact path="/product/:id" component={()=> <ProductDetails />}/>
             </Switch>
         </div>
      </Router>
  );
}

export default App;

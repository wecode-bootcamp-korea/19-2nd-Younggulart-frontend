import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Main from './Pages/Main/Main';
import Bids from './Pages/Bids/Bids';
import Footer from './Components/Footer/Footer';
import ProductList from './Pages/ProductList/ProductList';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Nav />
        <Route exact path="/bids" component={Bids} />
        <Route exact path="/productList" component={ProductList} />
        {/* <Route exact path="/productList/:id" component={ProductDetail} /> */}
        {/* <Route exact path="/" component={Main} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/cart" component={Cart} /> */}
      </Switch>
      <Footer />
    </Router>
  );
};
export default Routes;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Main from './Pages/Main/Main';
import Bids from './Pages/Bids/Bids';
// import Login from './Pages/Login/Login';
// import Signup from './Pages/Signup/Signup';
import Footer from './Components/Footer/Footer';
import ProductList from './Pages/ProductList/ProductList';
import ProductDetail from './Pages/ProductDetail/ProductDetail';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/bids" component={Bids} />
        <Route exact path="/productlist" component={ProductList} />
        <Route exact path="/" component={Main} />
        <Route exact path="/productlist/:id" component={ProductDetail} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default Routes;

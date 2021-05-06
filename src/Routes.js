import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Main from './Pages/Main/Main';
import Bids from './Pages/Bids/Bids';
import ProductList from './Pages/ProductList/ProductList';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import TopButton from './Components/TopButton/TopButton';
import Footer from './Components/Footer/Footer';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/productlist" component={ProductList} />
        <Route exact path="/productlist/:id" component={ProductDetail} />
        <Route exact path="/bids" component={Bids} />
      </Switch>
      <TopButton />
      <Footer />
    </Router>
  );
};
export default Routes;

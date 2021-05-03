import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Loading from './Components/Loading/Loading';
import Signup from './Pages/Signup/Signup';
import Bids from './Pages/Bids/Bids';
import Footer from './Components/Footer/Footer';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        {/* <Route exact path="/nav" component={Nav} /> */}
        <Route exact path="/bids" component={Bids} />
        {/* <Route exact path="/" component={Main} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/productList" component={ProductList} />
        <Route exact path="/productList/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} /> */}
      </Switch>
      <Footer />
    </Router>
  );
};
export default Routes;

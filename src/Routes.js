import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Footer from './Components/Footer/Footer';

const Routes = () => {
  return (
    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/" component={Main} /> */}
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} /> */}
        {/* <Route exact path="/productList" component={ProductList} />
        <Route exact path="/productList/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/order/complete" component={OrderComplete} />
        <Route exact path="/live" component={Live} /> */}
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
};
export default Routes;

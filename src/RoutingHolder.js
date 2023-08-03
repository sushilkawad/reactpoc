import { Switch, Route } from 'react-router-dom';
import CartPage from './containers/CartPage';
import HomePage from './containers/HomePage';
import QR from './containers/QR';

function RoutingHolder() {

  return (
      <Switch>
        <Route path="/qr">
          <QR />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
  )
}

export default RoutingHolder;

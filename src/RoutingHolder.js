import { Switch, Route } from 'react-router-dom';
import CartPage from './containers/CartPage';
import HomePage from './containers/HomePage';

function RoutingHolder() {

  return (
      <Switch>
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

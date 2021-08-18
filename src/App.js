import React, { Component } from 'react';
import './App.css';

import items from './data.json';
import MainHeader from './components/mainHeader/MainHeader';
import RoutingHolder from './RoutingHolder';
import { BrowserRouter } from 'react-router-dom';

export const ShopContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      cart: [],
      flashMessage: '',
      filteredItems: []
    }
    this.timer = null;
  }

  componentDidMount() {
    this.setState({ items });
  }

  componentDidUpdate() {
    let { flashMessage } = this.state;
    if (flashMessage !== '') {
      this.timer = setTimeout(() => {
        this.setState({ flashMessage: '' })
      }, 3000)
    } else {
      clearTimeout(this.timer);
    }
  }

  addToCart = (item) => {
    let { name } = item;
    let { cart } = this.state;
    let updatedCart;
    if (!!cart.find(c => c.name === name)) {
      updatedCart = cart.map(c => {
        if (c.name === name) {
          c.quantity = c.quantity + 1;
        }
        return c;
      });
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }];
    }
    console.log(updatedCart);
    this.setState({ cart: updatedCart, flashMessage: `${name} is added to cart` });
  }

  decreaseQuantity = (name) => {
    let { cart } = this.state;
    let updatedCart = cart
      .map(item => name === item.name ? (item.quantity = item.quantity - 1, item) : item)
      .filter(item => item.quantity !== 0);

    this.setState({ cart: updatedCart });
  }

  increaseQuantity = (name) => {
    let { cart } = this.state;
    let updatedCart = cart
      .map(item => name === item.name ? (item.quantity = item.quantity + 1, item) : item)

    this.setState({ cart: updatedCart });
  }

  applyRange = (range) => {
    const { items } = this.state;
    const filteredItems = items.filter(item => item.price.actual < range);
    this.setState({ filteredItems });
  }

  sortBy = (property, order) => {
    const { items, filteredItems } = this.state;
    //  items = filteredItems.length > 0 ? filteredItems : items;
    let filteredSortedItems = filteredItems;
    let totalSortedItems = items;
    if (filteredItems.length > 0) {
      filteredSortedItems = property === 'discount'
        ? filteredItems.sort((a, b) => order === 'desc' ? b[property] - a[property] : a[property] - b[property])
        : filteredItems.sort((a, b) => order === 'desc' ? b[property].actual - a[property].actual : a[property].actual - b[property].actual)
    } else {
      totalSortedItems = property === 'discount'
        ? items.sort((a, b) => order === 'desc' ? b[property] - a[property] : a[property] - b[property])
        : items.sort((a, b) => order === 'desc' ? b[property].actual - a[property].actual : a[property].actual - b[property].actual)
    }

    this.setState({ items: totalSortedItems, filteredItems: filteredSortedItems });
  }

  handleSearch = (e) => {
    const { items } = this.state;
    const filteredItems = items.filter(i => i.name.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({ filteredItems });
  }

  render() {
    // console.log('asd');
    const { items, filteredItems, cart, flashMessage } = this.state;
    const provideData = {
      allItems: items,
      filteredItems,
      flashMessage,
      addToCart: this.addToCart,
      decreaseQuantity: this.decreaseQuantity,
      increaseQuantity: this.increaseQuantity,
      applyRange: this.applyRange,
      sortBy: this.sortBy,
      handleSearch: this.handleSearch,
      cart
    };

    return (
      <ShopContext.Provider value={provideData}>
        <BrowserRouter>
          <div className="App">
            <MainHeader />
            <div className="main-container d-flex">
              <RoutingHolder />
            </div>
          </div>
        </BrowserRouter>
      </ShopContext.Provider>
    )
  }
}

export default App;

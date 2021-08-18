import React from "react";
import { ShopContext } from "../../../App";

//(a)=>{return a+1 }
//(a)=>(a+1)
//a=>a+1


function Cart() {
  return (
    <ShopContext.Consumer>
      {
        //destructuring
        //value.cart = {cart}
        ({ cart, decreaseQuantity, increaseQuantity }) => {
          // console.log('v:', cart);
          const totalItems = cart.reduce((a, b) => a + b.quantity, 0);
          return totalItems > 0 && <div className="cart-items">
            <table className="border-tb">
              <thead>

                <tr className="first-tr border-tb">
                  <th>Items({totalItems})</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>

                {
                  cart.map(item => <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>
                      <button onClick={() => decreaseQuantity(item.name)}>-</button>
                      {item.quantity}
                      <button onClick={() => increaseQuantity(item.name)}>+</button>
                    </td>
                    <td>${item.price.display}</td>
                  </tr>)
                }
              </tbody>

            </table>
          </div>
        }
      }
    </ShopContext.Consumer>

  )
}

export default Cart;
import { useContext } from "react";
import { ShopContext } from "../../../App";

function Checkout() {

  const { cart } = useContext(ShopContext);

  const totalItems = cart.reduce((a, b) => a + b.quantity, 0);
  const totalItemsPrice = cart.reduce((a, b) => a + (b.price.display * b.quantity), 0);
  const finalPrice = cart.reduce((a, b) => a + (b.price.actual * b.quantity), 0);
  const totalDiscount = totalItemsPrice - finalPrice;
  // console.log(cart);
  return (
    totalItems > 0 && <div className="checkout border-1">
      <div>Total</div>
      <div>
        <span>Items({totalItems})</span>
        <span>:</span>
        <span>${totalItemsPrice}</span>
      </div>
      <div>
        <span>Discount</span>
        <span>:</span>
        <span>-${totalDiscount}</span>
      </div>
      <div>
        <span>Type Discount</span>
        <span>:</span>
        <span>-$0</span>
      </div>
      <div className="bg-gray">
        <span>Order Total</span>
        <span>:</span>
        <span>${finalPrice}</span>
      </div>
    </div>
  )
}

export default Checkout;
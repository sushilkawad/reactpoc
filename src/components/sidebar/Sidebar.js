import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";

function Sidebar (){
    return(
      <aside className="flex-1 p-10">
              <Cart />

              <Checkout />
            </aside>
    )
}

export default Sidebar;
import Sidebar from '../components/sidebar/Sidebar';
import Item from '../components/item/Item';
import { useContext } from 'react';
import { ShopContext } from '../App';

export default function CartPage() {
  const {cart} = useContext(ShopContext);
  return (
      <>
        <main className="cart-page d-flex flex-2 flex-wrap p-10 gap-10">
          {
            cart.map(item => <Item key={item.name} item={item} />)
          }
        </main>
        <Sidebar />
    </>
  )
}
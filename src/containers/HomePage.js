import { useContext } from 'react';
import { ShopContext } from '../App';
import Filter from '../components/filter/Filter';
import Header from '../components/header/Header';
import Item from '../components/item/Item';

export default function HomePage() {
  const { allItems, filteredItems } = useContext(ShopContext);
  const items = filteredItems.length > 0 ? filteredItems : allItems;

  return (
    <>
      <aside className="hideOnMobile filter-wrapper d-flex flex-direction-column flex-1">
        <Filter />
      </aside>
      <main className="home-page flex-3 home-main p-10">
        <Header />
    asdasd
        <div className="d-flex">
          <main className="d-flex flex-2 flex-wrap p-10 gap-10">
            {
              items.map(item => <Item key={item.name} item={item} />)
            }
          </main>
        </div>
      </main>
    </>
  )
}

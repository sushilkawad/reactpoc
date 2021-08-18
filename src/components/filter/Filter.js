import { useContext, useState } from 'react';
import { ShopContext } from '../../App';
import './Filter.css';
function Filter() {

  const { allItems, applyRange } = useContext(ShopContext);
  const minPrice = allItems.slice().sort((a, b) => a.price.actual - b.price.actual)[0]?.price.actual;
  const maxPrice = allItems.slice().sort((a, b) => b.price.actual - a.price.actual)[0]?.price.actual;
  const [range, changeRange] = useState(0);

  function handleRange(e) {
    e.preventDefault();
    changeRange(e.target.value)
  }

  return (
    <div className="main-filter">
      <h3>Filter</h3>
      <div className="d-flex justify-content-space-between">
        <span>Rs. {minPrice}</span>
        <span>Rs. {range || minPrice}</span>
        <span>Rs. {maxPrice}</span>
      </div>
      <div><input type="range" value={range} onChange={handleRange} min={minPrice} max={maxPrice} /></div>
      <div className="d-flex justify-content-center"><button onClick={() => applyRange(range)}>Apply</button></div>
    </div>
  )
}

export default Filter;
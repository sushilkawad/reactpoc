import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../../App';
import Button from '../button/Button';
import Price from '../price/Price';
import Title from '../title/Title';
//React.memo
const Item = React.memo(({ item }) => {
  const shop = useContext(ShopContext);
  const location = useLocation();
  // useEffect() //hook
  // useState()// manage state
  // useMemo,useContext,useCallback
  // console.log(location.pathname);
  return (
    // <ShopContext.Consumer>
    //   {
    // (value)=>(
    <div className="single-item border-1">
      <div className="item-image">
        <Title text={`${item.discount} % off`} label={true} />
        <img alt={item.name} src={item.image} />
      </div>
      <div className="item-footer bg-gray p-10 d-flex justify-content-space-between">
        <div>
          <Title text={item.name} />
          <Price price={item.price} />
        </div>
        {location.pathname !== '/cart' && <div className="add-to-cart-wrapper">
          <Button label="Add to cart" clickFunction={() => shop.addToCart(item)} />
        </div>}
      </div>
    </div>
    // )
    //   }
    // </ShopContext.Consumer>

  )
})

export default Item;
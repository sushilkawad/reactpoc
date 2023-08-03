import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShopContext } from '../../App';
import './MainHeader.css';

const MainHeader = React.memo(() => {
    const { cart, handleSearch } = useContext(ShopContext);
    const [search, setSearch] = useState('');
    const totalItems = cart.reduce((a, b) => a + b.quantity, 0);
    const { pathname } = useLocation();

    return (
        <header className="main-header d-flex justify-content-space-between">
            <Link to="/">Home 1</Link>
            {pathname !== '/cart' && <div className="mr-10">
                <input type="text" onChange={(e) => { setSearch(e.target.value); handleSearch(e) }} id="search" value={search} placeholder="Search" />
                <Link to="/cart">
                    <i className="fa fa-shopping-cart">
                        {totalItems > 0 && <span className="count">{totalItems}</span>}
                    </i>
                </Link>
            </div>}
        </header>)
});

export default MainHeader;

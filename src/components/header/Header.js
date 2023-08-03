import React, { useContext, useState } from 'react';
import { ShopContext } from '../../App';
import Filter from '../filter/Filter';
import Modal from '../modal/Modal';
import Title from '../title/Title';
import './Header.css';

const Header = React.memo(() => {
    const { flashMessage, sortBy } = useContext(ShopContext);
    const sortArray = [
        { title: 'Price-High', active: false, arguments: ['price', 'desc'] },
        { title: 'Price-Low', active: false, arguments: ['price', 'asc'] },
        { title: 'Discount', active: false, arguments: ['discount', 'desc'] },
    ];
    const [sortValues, updateSortArray] = useState(sortArray);
    const [isModalOpen, handleModal] = useState({ status: false, modalName: '' });

    function updateActiveTab(title) {
        const newSortArray = sortArray.map(a => a.title === title ? (a.active = true, a) : a);
        updateSortArray(newSortArray);
    }

    const modalData = {
        sortArray,
        filter: <Filter />
    }

    return (
        <>
            <header className="hideOnMobile border-tb d-flex">
                <div className="sortby">
                    {
                        sortValues.map(a => <span key={a.title} className={a.active ? 'active' : ''} onClick={() => { updateActiveTab(a.title); sortBy(...a.arguments) }}>{a.title}</span>)
                    }
                </div>
                <div className="flashmessage flex-2 d-flex align-items-center">
                    {flashMessage && <Title text={flashMessage} label={true} />}
                </div>
            </header>
            <header className="hideOnDesktop mobile-header border-tb">
                <div onClick={() => handleModal({ status: true, modalName: 'sort' })}>Sort 111</div>
                <div onClick={() => handleModal({ status: true, modalName: 'filter' })}>Filter</div>
            </header>
            <Modal isOpen={isModalOpen} sortBy={sortBy} data={modalData} handleModal={handleModal} />
        </>
    )
});

export default Header;

// import { useContext } from 'react';
import { useState, useContext } from 'react';
import { ShopContext } from '../../App';
import './Modal.css';
function Modal({ sortBy, isOpen: { status, modalName }, handleModal, data: { sortArray, filter } }) {
    // const { applyRange } = useContext(ShopContext);
    const [selectedValue, setSelectedValue] = useState('');
    const { allItems, applyRange } = useContext(ShopContext);
    const minPrice = allItems.slice().sort((a, b) => a.price.actual - b.price.actual)[0]?.price.actual;
    const maxPrice = allItems.slice().sort((a, b) => b.price.actual - a.price.actual)[0]?.price.actual;
    const [range, changeRange] = useState(0);

    // console.log(selectedValue)
    return (

        <div id="open-modal" className={status ? "modal-open modal-window" : "modal-window"}>
            <div>
                <div>
                    <h1>{modalName === 'sort' ? 'Sort Options' : 'Filter Options'}</h1>
                    <div>
                        {
                            modalName === 'sort'
                                ? sortArray.map(a => <div key={a.title}><input name="sort" type="radio" defaultValue={a.title} onChange={() => setSelectedValue(a.title)} defaultChecked={selectedValue === a.title} /> {a.title}</div>)
                                : <>
                                    <div className="d-flex justify-content-space-between">
                                        <span>Rs. {minPrice}</span>
                                        <span>Rs. {range || minPrice}</span>
                                        <span>Rs. {maxPrice}</span>
                                    </div>
                                    <div><input type="range" value={range} onChange={(e) => changeRange(e.target.value)} min={minPrice} max={maxPrice} /></div>
                                </>
                        }
                    </div>
                </div>
                <div className="modal-actions d-flex justify-content-space-between">
                    <a onClick={() => {
                        handleModal(false);
                        modalName === 'sort'
                            ? sortBy(...sortArray.find(s => s.title === selectedValue).arguments)
                            : applyRange(range)
                    }}>Apply</a>
                    <a onClick={() => handleModal(false)}>Close</a>
                </div>
            </div>
        </div>

    )
}

export default Modal;
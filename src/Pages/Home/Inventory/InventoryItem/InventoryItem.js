import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css'

const InventoryItem = ({ item }) => {
    const { name, img, price, shortDescription, quantity, supplierName , _id} = item;
    const navigate = useNavigate();
    const navigatedItemDetails = id => {
        navigate(`/itemsDetails/${id}`)
    }
    return (
        <div className='shadow-lg bg-white shadow-gray-400 p-3'>
            <img className='w-full mb-3' src={img} alt="" />
            <h5>{name}</h5>
            <p>Message: {shortDescription}</p>
            <h5>Price: ${price}</h5>
            <h6>Available: {quantity}</h6>
            <p className='mb-0'>Supplier: {supplierName}</p>
            <button onClick={() => navigatedItemDetails(_id)} className='bg-cyan-500 mt-2 hover:bg-cyan-600 text-white w-2/6 rounded  py-1 text-uppercase'>Update</button>
        </div>
    );
};

export default InventoryItem;
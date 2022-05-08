// import React, { useEffect, useState } from 'react';
import useItems from '../../customHooks/useItems';
import './Inventory.css'
import InventoryItem from './InventoryItem/InventoryItem';

const Inventory = () => {
    const [items, setItems] = useItems();


    return (
        <div className='px-5 py-4 mt-5 bg-gray-100'>
            <h3 className='text-center text-cyan-500 font-bold'>Our Products</h3>
            <div className='grid md:grid-cols-3 gap-5 mt-4'>
            {
                items.map(item => <InventoryItem key={item._id} item={item}></InventoryItem>
                ).slice(0, 6)
            }
        </div>
        </div>
    );
};

export default Inventory;
// import React, { useEffect, useState } from 'react';
import useItems from '../../customHooks/useItems';
import './Inventory.css'
import InventoryItem from './InventoryItem/InventoryItem';

const Inventory = () => {
    const [items, setItems] = useItems();


    return (
        <div className='mx-5 mt-5'>
            <h3 className='text-center'>Our Products</h3>
            <div className='grid md:grid-cols-3 gap-5'>
            {
                items.map(item => <InventoryItem key={item._id} item={item}></InventoryItem>
                ).slice(0, 6)
            }
        </div>
        </div>
    );
};

export default Inventory;
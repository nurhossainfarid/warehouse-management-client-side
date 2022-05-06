// import React, { useEffect, useState } from 'react';
import useItems from '../../customHooks/useItems';
import './Inventory.css'
import InventoryItem from './InventoryItem/InventoryItem';

const Inventory = () => {
    const [items, setItems] = useItems();


    return (
        <div className='grid md:grid-cols-3 gap-5'>
            {
                items.map(item => <InventoryItem key={item._id} item={item}></InventoryItem>
                ).slice(0, 6)
            }
        </div>
    );
};

export default Inventory;
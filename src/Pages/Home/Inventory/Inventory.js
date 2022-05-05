import React, { useEffect, useState } from 'react';
import './Inventory.css'
import InventoryItem from './InventoryItem/InventoryItem';

const Inventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = 'https://salty-beach-12197.herokuapp.com/items';
        fetch(url)
            .then(res => res.json())
            .then(data => {
            setItems(data)
        })
    }, [])
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
import React, { useEffect, useState } from 'react';
import './Inventory.css'

const Inventory = () => {
    const [items, setItems] = useState([]);
    // axios.get('http://localhost:5000/items')
    //     .then(response => {
    //         setItems(response);
    // })
    useEffect(() => {
        const url = 'http://localhost:5000/items';
        fetch(url)
            .then(res => res.json())
            .then(data => {
            setItems(data)
        })
    }, [])
    return (
        <div className='grid md:grid-cols-3 gap-5'>
            {
                items.map(item => 
                    <div key={item._id}>
                        <img src={item.img} alt="" />
                        <h5>{item.name}</h5>
                        <p>Message: {item.shortDescription}</p>
                        <h5>Price: ${item.price}</h5>
                        <h6>Available: {item.quantity}</h6>
                        <p className='mb-0'>Supplier: {item.supplierName}</p>
                        <button className='bg-cyan-500 hover:bg-cyan-600 text-white w-2/6 rounded  py-1 text-uppercase'>Update</button>
                    </div>
                )
            }
        </div>
    );
};

export default Inventory;
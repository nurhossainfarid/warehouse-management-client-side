
import { useAuthState } from 'react-firebase-hooks/auth';
import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import useItems from '../customHooks/useItems';

const MyItems = () => {
        const [user] = useAuthState(auth);
        const [addItems, setAddItems] = useState([]);
        const [items, setItems] = useItems();
    
    
        useEffect(() => {
            const addItems = async () => {
                const email = user?.email;
                const url = `https://salty-beach-12197.herokuapp.com/myItems?email=${email}`;
                fetch(url)
                    .then(res => res.json())
                    const { data } = await axios.get(url);
                    setAddItems(data);
                };
                addItems();
        }, [user]);
    
    const handleDelete = id => {
        const url = `https://salty-beach-12197.herokuapp.com/items/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
                alert('Successfully delete')
        })
    }
        return (
            <div>
                <h1>Add Items : {addItems.length}</h1>
                {
                    addItems.map(item => <>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.email}</Card.Title>
                                <h4>Name : {item.name}</h4>
                                <h5>Price : {item.price}</h5>
                                <h5>Available : {item.quantity}</h5>
                                <p>Message : {item.shortDescription}</p>
                                <p>Supplier : {item.supplierName}</p>
                                <button onClick={() => handleDelete(item._id)} className='bg-cyan-500 hover:bg-cyan-600 text-white hover:text-gray-400 rounded px-3 py-1'>Delete Item</button>
                            </Card.Body>
                        </Card>
                    </>)
                }
            </div>
        );
};

export default MyItems;
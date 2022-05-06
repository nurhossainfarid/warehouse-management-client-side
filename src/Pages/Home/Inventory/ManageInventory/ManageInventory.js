import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';




const ManageInventory = () => {
    const { itemID } = useParams();
    const [item, setItem] = useState([]);
    // handle delete one
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure');
        if (proceed) {
            const url = `https://salty-beach-12197.herokuapp.com/items/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = item.filter(i => i._id !== id);
                    setItem(remaining)
            })
        }
    }
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
        <div className=''>
            {
                items.map(item => 
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Message</th>
                            <th>Price</th>
                            <th>Available</th>
                            <th>Supplier</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=''>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.shortDescription}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.supplierName}</td>
                                <td><button onClick={() => handleDelete(itemID)} className='text-red-500 font-bold'>X</button></td>
                            </tr>
                        </tbody>
                        </Table>
                )
            }
        </div>
    );
};

export default ManageInventory;
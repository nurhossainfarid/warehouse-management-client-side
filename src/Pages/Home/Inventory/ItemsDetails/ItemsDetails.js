import React, { useRef} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useItemDetails from '../../../customHooks/useItemDetails';

const ItemsDetails = () => {
    const { itemID } = useParams();
    const [item] = useItemDetails(itemID);
    const navigate = useNavigate();
    const quantityRef = useRef('');
    const addQuantityRef = useRef('')
    const { img, name, _id, price, shortDescription, quantity, supplierName } = item;

    const handleDelivered = event => {
        event.preventDefault();
        const available = quantityRef.current.value;
        const newQuantity = parseInt(available - 1);
        // send data to server 
        const url = `https://salty-beach-12197.herokuapp.com/items/${itemID}`
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({newQuantity})
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success data load', data);
                quantityRef.current.value = newQuantity;
                alert('user Update successfully')
        })
    }

    // add quantity 
    const handleAddQuantity = event => {
        event.preventDefault();
        const previousQuantity = parseInt(quantityRef.current.value);
        console.log(previousQuantity);
        const addQuantity = parseInt(addQuantityRef.current.value);
        console.log(addQuantity);
        const currentQuantity = parseInt(previousQuantity + addQuantity);

        // api for add quantity
        const url = `https://salty-beach-12197.herokuapp.com/items/${itemID}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({currentQuantity})
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success data load', data);
                quantityRef.current.value = currentQuantity;
                alert('user Update successfully')
        })

    }


    const navigatedManageInventory = id => {
        navigate(`/manageInventory/${id}`)
    }
    return (
        <div className='w-50 mx-auto'>
            <section>
                <img src={img} alt="" />
                <h3 className='text-xl'>ID : {_id}</h3>
                <h4>Device Name : {name}</h4>
                <p>Message : {shortDescription}</p>
                <div>
                    <label htmlFor="">Available : <input type="number" ref={quantityRef} className='border-0 bg-white' value={quantity} disabled /></label>
                </div>
                <p className='font-bold'>Price : ${price}</p>
                <h6>Supplier : {supplierName}</h6>
                <p className='font-bold text-red-500'>Sold<span>*</span></p>
                <button onClick={handleDelivered} className='bg-cyan-500 hover:bg-cyan-600 py-2 px-3 text-white font-bold rounded text-xl text-uppercase'>Delivered</button>
            </section>

            {/* stork item section */}
            <section className='mt-5 '>
                <h3>Add Restock</h3>
                <div className='flex gap-2'>
                    <input ref={addQuantityRef} className='bg-gray-100 border-2 py-1 rounded border-gray-400 w-50 gap-5' type="number" name="" id="" />
                    <button onClick={handleAddQuantity} className='px-3 py-1 bg-cyan-500 rounded'>Add</button>
                </div>
            </section>

            {/* Manage Inventory section */}
            <section className='mt-3'>
                <button onClick={() => navigatedManageInventory(_id)} className="px-3 py-2 bg-cyan-500 hover:bg-cyan-600 rounded">Manage Inventory</button>
            </section>
        </div>
    );
};

export default ItemsDetails;
import React, { useRef} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useItemDetails from '../../../customHooks/useItemDetails';

const ItemsDetails = () => {
    const { itemID } = useParams();
    const [item] = useItemDetails(itemID);
    // const [newAvailable, setNewAvailable] = useState([]);
    const navigate = useNavigate();
    const quantityRef = useRef();
    const { img, name, _id, price, shortDescription, quantity, supplierName } = item;

    const handleDelivered = event => {
        event.preventDefault();
        let available = quantityRef.current.value;
        console.log(available);
        let newQuantity = parseInt(available - 1);
        console.log(newQuantity);
        // send data to server 
        const url = `http://localhost:5000/items/${itemID}`
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
                // const remaining = available.filter(item => item._id !== itemID); 
                // setNewAvailable(remaining);
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
                    <input className='bg-gray-100 border-2 py-1 rounded border-gray-400 w-50 gap-5' type="number" name="" id="" />
                    <button className='px-3 py-1 bg-cyan-500 rounded'>Add</button>
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
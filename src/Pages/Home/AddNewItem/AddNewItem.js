import React from 'react';
import { useForm } from "react-hook-form";

const AddNewItem = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        let url = 'https://salty-beach-12197.herokuapp.com/items';
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result));
    };
   
  return (
    <div className='w-50 mx-auto mt-3'>
        <h3>Add New Product</h3>
        <form className='d-flex flex-column gap-3' onSubmit={handleSubmit(onSubmit)}>
            <input className='border-2 border-gray-400 p-2 rounded text-black' type="text" placeholder='Enter product name' {...register("name", { required: true, maxLength: 50 })} />
            <input className='border-2 border-gray-400 p-2 rounded text-black' placeholder='Price' type="number" {...register("price")} />
            <textarea className='border-2 border-gray-400 p-2 rounded' placeholder='Message' {...register("shortDescription")} />
            <input className='border-2 border-gray-400 p-2 rounded text-black' placeholder='Quantity' type="number" {...register("quantity")} />
            <input className='border-2 border-gray-400 p-2 rounded text-black' placeholder='Supplier Name' type="text" {...register("supplierName")} />
            <input className='border-2 border-gray-400 p-2 rounded text-black' placeholder='Photo URL' type="text" {...register("img")} />
            <input className='py-2 px-3 bg-cyan-500 text-white text-2xl font-bold rounded hover:bg-cyan-600'  type="submit" value="Add service" />
        </form>
    </div>
  );
};

export default AddNewItem;
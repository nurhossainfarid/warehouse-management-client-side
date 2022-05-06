import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useItems from '../../../customHooks/useItems';



const ManageInventory = () => {
    const [items, setItems] = useItems();

    // handle delete
    const handleDelete = id => {
        console.log(items);
        const proceed = window.confirm('Are you sure');
        if (proceed) {
            const url = `https://salty-beach-12197.herokuapp.com/items/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining)
            })
        }
    }
    return (
        <div className=''>
            <Table className='mb-0 border-b-2 border-gray-300' striped bordered hover variant="dark">
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
            </Table>
            {
                items.map(item => 
                    <div>
                        <Table key={item._id} className="mb-0 border-green-400" striped bordered hover variant="dark">
                            <tbody>
                                <tr className=''>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.shortDescription}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.supplierName}</td>
                                    <td><button onClick={() => handleDelete(item._id)} className='text-red-500 font-bold'>X</button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                )
            }
            {/* add new item */}
            <section className='mt-5 w-25 mx-auto'>
                <Link to={'/addNewItem'}>
                    <button className='text-white hover:text-gray-200 font-bold text-2xl py-1 px-3 bg-cyan-500 hover:bg-cyan-600 rounded'>Add New Item</button>
                </Link>
            </section>
        </div>
    );
};

export default ManageInventory;
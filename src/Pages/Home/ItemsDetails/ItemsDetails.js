import React from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../../customHooks/useItems';

const ItemsDetails = () => {
    const { itemID } = useParams();
    const [items, setItems] = useItems(itemID);
    return (
        <div>
            <h1>{items.name}</h1>
        </div>
    );
};

export default ItemsDetails;
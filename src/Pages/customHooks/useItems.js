import { useEffect, useState } from 'react';

const useItems = itemID => {
    const [items, setItems] = useState();
    const url = 'https://salty-beach-12197.herokuapp.com/items';
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
        setItems(data)
        })
    }, [itemID])
    return [items, setItems]
};

export default useItems;
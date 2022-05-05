import { useEffect, useState } from 'react';

const useItemDetails = itemID => {
    const [item, setItem] = useState({});
    const url = `https://salty-beach-12197.herokuapp.com/items/${itemID}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
        setItem(data)
        })
    }, [itemID])
    return [item, setItem];
};

export default useItemDetails;
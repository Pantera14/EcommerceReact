import { useEffect, useState } from "react";
import customFetch from "../Utils/customFetch";
import ItemDetail from "./ItemDetail";
const { products } = require('../Utils/Products');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        customFetch(2000, products[1])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;
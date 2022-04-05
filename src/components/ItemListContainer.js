import ItemList from './ItemList';
import customFetch from "../Utils/customFetch"
import { useEffect, useState } from 'react';

const {products} = require('../Utils/Products');

const ItemListContainer = ({greeting}) =>{
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    },[]);


    return(
        <ItemList items={datos} />
    )
}

export default ItemListContainer;
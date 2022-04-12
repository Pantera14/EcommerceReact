import ItemCount from './ItemCount';
import ItemList from './ItemList';
import customFetch from "../Utils/customFetch"
import { Wrapper } from './styledComponents';
import { useEffect, useState } from 'react';
const {products} = require('../Utils/Products');


const ItemListContainer = ({greeting}) =>{
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    },[]);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return(
        <>
        <Wrapper>{greeting}</Wrapper>
            <ItemList items={datos} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;
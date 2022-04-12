import Item from "./Item";
import { ProductsContainer } from './styledComponents';

const ItemList = ({ items }) => {
    return (
        <ProductsContainer>
        {
            items.length > 0
            ? items.map(item => <Item name={item.name} stock={item.stock} title={item.name} price={item.price} pictureUrl={item.image[0]} />)
            : <p></p>
        }
        </ProductsContainer>
    );
}

export default ItemList;
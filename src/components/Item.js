import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@mui/icons-material';
import { ProductContainer, Circle, Image, Info, Icon } from './styledComponents';

const Item = ({ name, stock, price, pictureUrl }) => {
    return (
        <ProductContainer>
            <Circle />
            <Image src={pictureUrl} />
            <Info>
                <Icon><strong>{name}</strong></Icon>
                <Icon>
                    <LocalOfferOutlined /><strong>$ {price}</strong>
                </Icon>
                <Icon>
                    <DescriptionOutlined />{stock} unid.
                </Icon>
                <Icon style={{cursor: "pointer"}}>
                    <InfoOutlined />Details
                </Icon>
            </Info>
        </ProductContainer>
    );
}

export default Item;
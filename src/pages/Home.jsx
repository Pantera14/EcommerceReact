import ItemDetailContainer from "../components/ItemDetailContainer";
// import ItemListContainer from "../components/ItemListContainer";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            {/* <ItemListContainer greeting="Hola Mundo ItemListContainer!!!" /> */}
            <ItemDetailContainer />
        </div>
    );
}

export default Home;
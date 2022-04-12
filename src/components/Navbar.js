import IconButtons from "./CartWidget"

const Navbar = () =>{
    return (
        <div>
            <header className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

<div className="container-fluid">
    <a className="navbar-brand">DISPENSARIO DE BEBIDAS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Cervezas y Vinos</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Bebidas Blancas y Whisky</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Snacks y accesorios</a>
        </li>
        <li className="nav-item">
        <a className="nav-link disabled"></a>
        </li>
    </ul>
    </div>
</div>
    <div><IconButtons /></div>
</nav>
</header>
    </div>
    );
}

export default Navbar;
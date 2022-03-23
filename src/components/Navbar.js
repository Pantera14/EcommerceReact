const Navbar = () =>{
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
    <a class="navbar-brand" href="#">DISPENSARIO DE BEBIDAS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Cervezas y Vinos</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Bebidas Blancas y Whisky</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Snacks y accesorios</a>
        </li>
        <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
        </li>
    </ul>
    </div>
</div>
</nav>
    </div>
    );
}

export default Navbar
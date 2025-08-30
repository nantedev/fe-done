
const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Donè</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Accueil</a>
            <a className="nav-link" href="/dons">À récupérer</a>
            <a className="nav-link" href="/new">Je donne</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


import { Link, NavLink } from 'react-router-dom'
export default function Header(){
  return (
    <header className="site-header sticky-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <span className="brand-mark"><i className="bi bi-heart-pulse-fill"></i></span>
            <strong>Vida em Dia</strong>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="menuPrincipal">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item"><NavLink className="nav-link" to="/">Início</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/recursos">Recursos</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/dashboard">Painel</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/triagem">Triagem</NavLink></li>
              <li className="nav-item"><Link className="btn btn-sm btn-action ms-lg-3 px-3" to="/triagem">Participar</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

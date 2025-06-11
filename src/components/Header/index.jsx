import { Link, NavLink } from 'react-router-dom';
import { marcas } from '../../data/data';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/quienes-somos">Quienes somos</NavLink>
        <div className="dropdown">
          <NavLink to="/productos">Productos</NavLink>
          <div className="dropdown-content">
            <NavLink to="/productos">Ver todos</NavLink>
            {marcas.map(marca => (
              <NavLink key={marca.id} to={`/productos/${marca.id}`}>{marca.nombre}</NavLink>
            ))}
          </div>
        </div>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  );
}

export default Header;
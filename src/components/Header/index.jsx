import { Link, NavLink } from 'react-router-dom';
import { marcas } from '../../data/data';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/TP-7---Celulares">Home</NavLink>
        <NavLink to="/TP-7---Celulares/quienes-somos">Quienes somos</NavLink>
        <div className="dropdown">
          <NavLink to="/TP-7---Celulares/productos">Productos</NavLink>
          <div className="dropdown-content">
            <NavLink to="/TP-7---Celulares/productos">Ver todos</NavLink>
            {marcas.map(marca => (
              <NavLink key={marca.id} to={`/TP-7---Celulares/productos/${marca.id}`}>{marca.nombre}</NavLink>
            ))}
          </div>
        </div>
        <NavLink to="/TP-7---Celulares/contacto">Contacto</NavLink>
      </nav>
    </header>
  );
}

export default Header;
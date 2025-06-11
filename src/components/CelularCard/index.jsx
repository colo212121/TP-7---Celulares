import { Link } from 'react-router-dom';
import { marcas } from '../../data/data';
import './CelularCard.css';

function CelularCard({ celular }) {
  const marca = marcas.find(m => m.id === celular.marcaId);

  return (
    <div className="celular-card" style={{
      border: '1px solid #ccc',
      borderRadius: 8,
      padding: 16,
      margin: 8,
      width: 250,
      boxSizing: 'border-box'
    }}>
      <img
        src={celular.fotos[0]}
        alt={celular.nombre}
        style={{
          width: '100%',
          height: 150,
          objectFit: 'cover',
          borderRadius: 8
        }}
      />
      <h3>{celular.nombre}</h3>
      <p>Marca: {marca?.nombre}</p>
      <p>Precio: ${celular.precio}</p>
      <Link to={`/producto/${celular.id}`}>Ver detalle</Link>
    </div>
  );
}

export default CelularCard;
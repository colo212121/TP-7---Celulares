import { useParams } from 'react-router-dom';
import { celulares, marcas } from '../data/data';

function DetalleProducto() {
  const { idCelular } = useParams();
  const celular = celulares.find(c => c.id === parseInt(idCelular));
  if (!celular) return <div>Producto no encontrado</div>;
  const marca = marcas.find(m => m.id === celular.marcaId);

  return (
    <div>
      <h1>{celular.nombre}</h1>
      <h2>Marca: {marca?.nombre}</h2>
      <p>{celular.descripcion}</p>
      <p>Precio: ${celular.precio}</p>
      <div className="fotos">
        {celular.fotos.map((url, i) => (
          <img key={i} src={url} alt={`${celular.nombre} ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default DetalleProducto;
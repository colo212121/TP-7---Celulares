import { useParams } from 'react-router-dom';
import { celulares } from '../data/data';
import CelularCard from '../components/CelularCard';

function Productos() {
  const { idMarca } = useParams();
  const productosFiltrados = idMarca
    ? celulares.filter(c => c.marcaId === parseInt(idMarca))
    : celulares;

  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '32px',
      marginBottom: '20px',
    },
    list: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '50px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Productos</h1>
      <div style={styles.list}>
        {productosFiltrados.map(celular => (
          <CelularCard key={celular.id} celular={celular} />
        ))}
      </div>
    </div>
  );
}

export default Productos;

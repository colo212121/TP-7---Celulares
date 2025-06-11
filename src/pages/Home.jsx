import { useState, useEffect } from 'react';
import { celulares } from '../data/data';
import Carousel from '../components/Carousel';
import CelularCard from '../components/CelularCard';

function getRandomCelulares(num) {
  const shuffled = [...celulares].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

function Home() {
  const [randomCelulares, setRandomCelulares] = useState([]);

  useEffect(() => {
    setRandomCelulares(getRandomCelulares(6));
  }, []);

  return (
    <div>
      <h1>Bienvenidos a la tienda de celulares</h1>
      <Carousel
        items={randomCelulares}
        renderItem={(celular) => <CelularCard celular={celular} />}
      />
      <h2>Más celulares destacados</h2>
      <div className="celulares-list" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {randomCelulares.map(celular => (
          <CelularCard key={celular.id} celular={celular} />
        ))}
      </div>
    </div>
  );
}

export default Home;
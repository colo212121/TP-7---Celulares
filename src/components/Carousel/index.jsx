import { useState } from 'react';
import './Carousel.css';

function Carousel({ items, renderItem }) {
  const [current, setCurrent] = useState(0);

  if (!items || items.length === 0) return null;

  const prev = () => setCurrent((current - 1 + items.length) % items.length);
  const next = () => setCurrent((current + 1) % items.length);

  return (
    <div className="carousel">
      <div className="carousel-content">
        <button className="carousel-btn" onClick={prev}>&lt;</button>
        <div className="carousel-item">
          {renderItem ? renderItem(items[current]) : null}
        </div>
        <button className="carousel-btn" onClick={next}>&gt;</button>
      </div>
      <div className="carousel-indicators">
        {items.map((_, i) => (
          <span
            key={i}
            className={i === current ? 'active' : ''}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
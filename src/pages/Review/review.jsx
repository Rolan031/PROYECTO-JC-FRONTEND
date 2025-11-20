import { useState, useEffect } from 'react';
import Modal from './modal';
import './Review.css';

export function Review() {
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    const fetchJuegos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/game');
        const data = await response.json();
        if (response.ok) {
          setJuegos(data);
        }
      } catch (error) {
        console.error('Error al obtener juegos para reseñas:', error);
      }
    };

    fetchJuegos();
  }, []);

  return (
    <section className="main-content">
      <h1 className="main-title">Reseñas de Juegos</h1>

      <figure className="games-grid">
        {juegos.map((juego) => (
          <div
            key={juego._id}
            onClick={() => setJuegoSeleccionado(juego)}
            className="game-card"
          >
            <img
              src={juego.imagenPortada || 'https://via.placeholder.com/200x300'}
              alt={juego.titulo}
              className="game-card-image"
            />
            <div className="game-card-content">
              <p className="game-card-title">{juego.titulo}</p>
            </div>
          </div>
        ))}
      </figure>
      <section>
        {juegoSeleccionado && (
          <Modal
            juego={juegoSeleccionado}
            onClose={() => setJuegoSeleccionado(null)}
          />
        )}
      </section>
    </section>
  );
}
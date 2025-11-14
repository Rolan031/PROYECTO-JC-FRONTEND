import  { useState } from 'react';
import Modal from './modal';
import juegos from './juegos.json';
import './Review.css';

export function Review() {
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);

  return (

      <section className="main-content">
        <h1 className="main-title">Reseñas de Juegos</h1>

        <figure className="games-grid">
          {juegos.map((juego) => (
            <div
              key={juego.id}
              onClick={() => setJuegoSeleccionado(juego)}
              className="game-card"
            >
              <img
                src={juego.imagen}
                alt={juego.nombre}
                className="game-card-image"
              />
              <div className="game-card-content">
                <p className="game-card-title">{juego.nombre}</p>
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
      </section>);

}
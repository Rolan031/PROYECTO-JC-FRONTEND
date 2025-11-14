import React, { useState, useEffect } from 'react';
import './Modal.css';

export default function Modal({ juego, onClose }) {
  const [reseñas, setReseñas] = useState([]);
  const [nuevaReseña, setNuevaReseña] = useState('');
  const [editandoId, setEditandoId] = useState(null);
  const [textoEditado, setTextoEditado] = useState('');
  //UseEffect temporal para asignar reseñas
  useEffect(() => {
    const reseñasGuardadas = JSON.parse(localStorage.getItem(`reseñas_${juego.id}`) || '[]');
    setReseñas(reseñasGuardadas);
  }, [juego.id]);

  const guardarReseñas = (nuevasReseñas) => {
    localStorage.setItem(`reseñas_${juego.id}`, JSON.stringify(nuevasReseñas));
    setReseñas(nuevasReseñas);
  };

  const agregarReseña = () => {
    if (nuevaReseña.trim()) {
      const nuevasReseñas = [
        ...reseñas,
        {
          id: Date.now(),
          texto: nuevaReseña,
          fecha: new Date().toLocaleDateString()
        }
      ];
      guardarReseñas(nuevasReseñas);
      setNuevaReseña('');
    }
  };

  const eliminarReseña = (id) => {
    if (window.confirm('¿Estás seguro de eliminar esta reseña?')) {
      const nuevasReseñas = reseñas.filter(r => r.id !== id);
      guardarReseñas(nuevasReseñas);
    }
  };

  const iniciarEdicion = (reseña) => {
    setEditandoId(reseña.id);
    setTextoEditado(reseña.texto);
  };

  const guardarEdicion = (id) => {
    if (textoEditado.trim()) {
      const nuevasReseñas = reseñas.map(r =>
        r.id === id ? { ...r, texto: textoEditado } : r
      );
      guardarReseñas(nuevasReseñas);
      setEditandoId(null);
      setTextoEditado('');
    }
  };

  const cancelarEdicion = () => {
    setEditandoId(null);
    setTextoEditado('');
  };

  return (
    <div className="modal-overlay">
      <article className="modal-container">
        {/* Header Semántico */}
        <header className="modal-header">
          <h2 className="modal-title">{juego.nombre}</h2>
          <button onClick={onClose} className="close-button" aria-label="Cerrar modal">✖</button>
        </header>

        {/* Contenido Principal */}
        <section className="modal-content modal-grid">
          {/* Sección de Imagen */}
          <section className="image-section">
            <img
              src={juego.imagen}
              alt={juego.nombre}
              className="game-image"
            />
          </section>

          {/* Sección de Reseñas */}
          <section className="review-section">
            {/* Formulario de Nueva Reseña */}
            <form className="add-review-section" onSubmit={(e) => { e.preventDefault(); agregarReseña(); }}>
              <label htmlFor="review-textarea" className="form-label">Escribe tu reseña</label>
              <textarea
                id="review-textarea"
                value={nuevaReseña}
                onChange={(e) => setNuevaReseña(e.target.value)}
                placeholder="Comparte tu opinión sobre este juego..."
                className="review-textarea"
              />
              <button
                type="submit"
                disabled={!nuevaReseña.trim()}
                className="add-button"
              >
                Agregar Reseña
              </button>
            </form>

            {/* Lista de Reseñas */}
            <section className="review-list">
              <h3 className="review-list-title">
                Reseñas ({reseñas.length})
              </h3>

              {reseñas.length === 0 ? (
                <p className="empty-message">
                  No hay reseñas aún. ¡Sé el primero en opinar!
                </p>
              ) : (
                <ul className="reviews-container">
                  {reseñas.map((reseña) => (
                    <li key={reseña.id} className="review-card">
                      {editandoId === reseña.id ? (
                        <>
                          <textarea
                            value={textoEditado}
                            onChange={(e) => setTextoEditado(e.target.value)}
                            className="edit-textarea"
                            aria-label="Editar reseña"
                          />
                          <nav className="edit-buttons" aria-label="Opciones de edición">
                            <button
                              onClick={() => guardarEdicion(reseña.id)}
                              className="save-button"
                            >
                              Guardar
                            </button>
                            <button
                              onClick={cancelarEdicion}
                              className="cancel-button"
                            >
                              Cancelar
                            </button>
                          </nav>
                        </>
                      ) : (
                        <>
                          <p className="review-text">{reseña.texto}</p>
                          <footer className="review-footer">
                            <time dateTime={reseña.fecha}>{reseña.fecha}</time>
                            <nav className="action-buttons" aria-label="Acciones de la reseña">
                              <button
                                onClick={() => iniciarEdicion(reseña)}
                                className="edit-button"
                              >
                                Editar
                              </button>
                              <button
                                onClick={() => eliminarReseña(reseña.id)}
                                className="delete-button"
                              >
                                Eliminar
                              </button>
                            </nav>
                          </footer>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </section>
        </section>
      </article>
    </div>
  );
}

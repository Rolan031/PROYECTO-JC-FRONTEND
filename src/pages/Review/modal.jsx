import React, { useState, useEffect } from 'react';
import './Modal.css';

export default function Modal({ juego, onClose }) {
  const [reseñas, setReseñas] = useState([]);
  const [nuevaReseña, setNuevaReseña] = useState('');
  const [editandoId, setEditandoId] = useState(null);
  const [textoEditado, setTextoEditado] = useState('');

  // Cargar reseñas desde la BD cuando cambia el juego
  useEffect(() => {
    const fetchReseñas = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/review?juegoId=${juego._id}`);
        const data = await response.json();
        if (response.ok) {
          setReseñas(data);
        }
      } catch (error) {
        console.error('Error al obtener reseñas:', error);
      }
    };

    if (juego?._id) {
      fetchReseñas();
    }
  }, [juego]);

  const agregarReseña = async () => {
    if (!nuevaReseña.trim()) return;

    try {
      const response = await fetch('http://localhost:3000/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          juegoId: juego._id,
          textoReseña: nuevaReseña
        })
      });
      const json = await response.json();
      if (response.ok) {
        setReseñas([json, ...reseñas]);
        setNuevaReseña('');
      } else {
        console.error('Error al crear reseña:', json);
      }
    } catch (error) {
      console.error('Error al crear reseña:', error);
    }
  };

  const eliminarReseña = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar esta reseña?')) return;

    try {
      const response = await fetch(`http://localhost:3000/api/review/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setReseñas(reseñas.filter(r => r._id !== id));
      } else {
        const json = await response.json();
        console.error('Error al eliminar reseña:', json);
      }
    } catch (error) {
      console.error('Error al eliminar reseña:', error);
    }
  };

  const iniciarEdicion = (reseña) => {
    setEditandoId(reseña._id);
    setTextoEditado(reseña.textoReseña || '');
  };

  const guardarEdicion = async (id) => {
    if (!textoEditado.trim()) return;

    try {
      const response = await fetch(`http://localhost:3000/api/review/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ textoReseña: textoEditado })
      });
      const json = await response.json();
      if (response.ok) {
        setReseñas(reseñas.map(r => (r._id === id ? json : r)));
        setEditandoId(null);
        setTextoEditado('');
      } else {
        console.error('Error al actualizar reseña:', json);
      }
    } catch (error) {
      console.error('Error al actualizar reseña:', error);
    }
  };

  const cancelarEdicion = () => {
    setEditandoId(null);
    setTextoEditado('');
  };

  const formatearFecha = (fechaIso) => {
    if (!fechaIso) return '';
    try {
      return new Date(fechaIso).toLocaleDateString();
    } catch {
      return '';
    }
  };

  return (
    <div className="modal-overlay">
      <article className="modal-container">
        {/* Header Semántico */}
        <header className="modal-header">
          <h2 className="modal-title">{juego.titulo}</h2>
          <button onClick={onClose} className="close-button" aria-label="Cerrar modal">✖</button>
        </header>

        {/* Contenido Principal */}
        <section className="modal-content modal-grid">
          {/* Sección de Imagen */}
          <section className="image-section">
            <img
              src={juego.imagenPortada || 'https://via.placeholder.com/200x300'}
              alt={juego.titulo}
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
                    <li key={reseña._id} className="review-card">
                      {editandoId === reseña._id ? (
                        <>
                          <textarea
                            value={textoEditado}
                            onChange={(e) => setTextoEditado(e.target.value)}
                            className="edit-textarea"
                            aria-label="Editar reseña"
                          />
                          <nav className="edit-buttons" aria-label="Opciones de edición">
                            <button
                              type="button"
                              onClick={() => guardarEdicion(reseña._id)}
                              className="save-button"
                            >
                              Guardar
                            </button>
                            <button
                              type="button"
                              onClick={cancelarEdicion}
                              className="cancel-button"
                            >
                              Cancelar
                            </button>
                          </nav>
                        </>
                      ) : (
                        <>
                          <p className="review-text">{reseña.textoReseña}</p>
                          <footer className="review-footer">
                            <time dateTime={reseña.createdAt}>{formatearFecha(reseña.createdAt)}</time>
                            <nav className="action-buttons" aria-label="Acciones de la reseña">
                              <button
                                type="button"
                                onClick={() => iniciarEdicion(reseña)}
                                className="edit-button"
                              >
                                Editar
                              </button>
                              <button
                                type="button"
                                onClick={() => eliminarReseña(reseña._id)}
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

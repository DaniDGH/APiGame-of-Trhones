import React, { useEffect, useState } from "react";
import { useFavoritos } from "../../context/FavoritosContext";
import './style.css';

function Favoritos() {
  const [characters, setCharacters] = useState([]);
  const { favoritos, toggleFavorito } = useFavoritos();

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error fetching characters", error));
  }, []);

  const filtered = characters.filter((char) => favoritos.includes(char.id));

  return (
    <div>
      <h2>Mis Personajes Favoritos</h2>
      {filtered.length === 0 ? (
        <p>No tienes personajes favoritos aún.</p>
      ) : (
        <ul className="character-list">
          {filtered.map((char) => (
            <li key={char.id} className="character-item">
              <img src={char.imageUrl} alt={char.fullName} />
              <div>
                <strong>{char.fullName}</strong> - {char.title}
              </div>
              <button onClick={() => toggleFavorito(char.id)}>💖 Quitar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favoritos;

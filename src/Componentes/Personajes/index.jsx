import React, { useEffect, useState } from 'react';
import { useFavoritos } from '../../context/FavoritosContext';
import './style.css';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { favoritos, toggleFavorito } = useFavoritos();

  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
      .then(response => response.json())
      .then(data => setCharacters(data))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  const filteredCharacters = characters.filter(character =>
    character.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Personajes</h2>

      <input
        type="text"
        placeholder="Buscar personaje..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <ul className="character-list">
        {filteredCharacters.map(character => (
          <li key={character.id} className="character-item">
            <img src={character.imageUrl} alt={character.fullName} />
            <div>
              <strong>{character.fullName}</strong> - {character.title}
            </div>
            <button onClick={() => toggleFavorito(character.id)}>
              {favoritos.includes(character.id) ? "💖 Quitar" : "🤍 Favorito"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Characters;


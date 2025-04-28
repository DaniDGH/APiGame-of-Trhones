import React, { useEffect, useState } from 'react';
import './style.css';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Lista de personajes */}
      <ul className="character-list">
        {filteredCharacters.map(character => (
          <li key={character.id} className="character-item">
            <img src={character.imageUrl} alt={character.fullName} />
            {character.fullName} - {character.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Characters;

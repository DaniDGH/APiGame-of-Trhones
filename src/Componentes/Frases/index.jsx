import React, { useEffect, useState } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://api.gameofthronesquotes.xyz/v1/random/5') // 5 random quotes
      .then(response => response.json())
      .then(data => setQuotes(data))
      .catch(error => console.error('Error fetching quotes:', error));
  }, []);

  return (
    <div>
      <h2>Frases</h2>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>
            "{quote.sentence}" — <strong>{quote.character.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quotes;

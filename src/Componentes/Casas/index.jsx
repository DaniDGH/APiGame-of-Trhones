import React from 'react';
import './style.css';

const houses = [
  {
    name: "House Stark",
    motto: "Winter is Coming",
    region: "The North",
    emblem: "🐺"
  },
  {
    name: "House Lannister",
    motto: "Hear Me Roar!",
    region: "The Westerlands",
    emblem: "🦁"
  },
  {
    name: "House Targaryen",
    motto: "Fire and Blood",
    region: "Dragonstone",
    emblem: "🐉"
  },
  {
    name: "House Baratheon",
    motto: "Ours is the Fury",
    region: "The Stormlands",
    emblem: "🦌"
  },
  {
    name: "House Greyjoy",
    motto: "We Do Not Sow",
    region: "Iron Islands",
    emblem: "🐙"
  },
  {
    name: "House Tyrell",
    motto: "Growing Strong",
    region: "The Reach",
    emblem: "🌹"
  },
  {
    name: "House Martell",
    motto: "Unbowed, Unbent, Unbroken",
    region: "Dorne",
    emblem: "☀️"
  },
  {
    name: "House Arryn",
    motto: "As High as Honor",
    region: "The Vale",
    emblem: "🦅"
  },
  {
    name: "House Tully",
    motto: "Family, Duty, Honor",
    region: "The Riverlands",
    emblem: "🐟"
  },
  {
    name: "House Bolton",
    motto: "Our Blades Are Sharp",
    region: "The North",
    emblem: "🔪"
  },
  {
    name: "House Frey",
    motto: "(No official motto)",
    region: "The Riverlands",
    emblem: "🏰"
  }
];

function Houses() {
  return (
    <div>
      <h2>Casas de Westeros</h2>
      <div className="houses-container">
        {houses.map((house, index) => (
          <div key={index} className="house-card">
            <h3>{house.emblem} {house.name}</h3>
            <p><strong>Motto:</strong> {house.motto}</p>
            <p><strong>Region:</strong> {house.region}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Houses;

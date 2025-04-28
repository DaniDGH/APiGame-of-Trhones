import React from 'react';
import './style.css';

const battles = [
  {
    nombre: "Batalla de los Bastardos",
    ubicacion: "Winterfell",
    participantes: "Jon Snow vs Ramsay Bolton",
    resultado: "Victoria de la Casa Stark",
    año: "c. 303 AC"
  },
  {
    nombre: "Batalla de Aguasnegras",
    ubicacion: "Desembarco del Rey",
    participantes: "Lannister vs Stannis Baratheon",
    resultado: "Victoria de la Casa Lannister",
    año: "c. 299 AC"
  },
  {
    nombre: "Boda Roja",
    ubicacion: "Los Gemelos",
    participantes: "Traición de los Frey y Bolton contra los Stark",
    resultado: "Masacre de la Casa Stark",
    año: "c. 299 AC"
  },
  {
    nombre: "Batalla del Camino Dorado",
    ubicacion: "El Dominio",
    participantes: "Daenerys Targaryen vs ejército Lannister",
    resultado: "Victoria de Daenerys (con Drogon)",
    año: "c. 304 AC"
  },
  {
    nombre: "Batalla del Castillo Negro",
    ubicacion: "El Muro",
    participantes: "La Guardia de la Noche vs Salvajes",
    resultado: "Victoria de la Guardia de la Noche",
    año: "c. 300 AC"
  }
];

function Battles() {
  return (
    <div>
      <h2>Batallas Famosas de Westeros</h2>
      <div className="battles-container">
        {battles.map((batalla, index) => (
          <div key={index} className="battle-card">
            <h3>{batalla.nombre}</h3>
            <p><strong>Ubicación:</strong> {batalla.ubicacion}</p>
            <p><strong>Participantes:</strong> {batalla.participantes}</p>
            <p><strong>Resultado:</strong> {batalla.resultado}</p>
            <p><strong>Año:</strong> {batalla.año}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Battles;

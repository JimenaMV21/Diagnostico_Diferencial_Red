import React from 'react';

export default function Colaborador({ nombre, especialidad }) {
  return (
    <div className="tarjeta-colaborador">
      <h3 className="nombre-colaborador">{nombre}</h3>
      <p className="especialidad-colaborador">{especialidad}</p>
    </div>
  );
}
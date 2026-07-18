import React from 'react';

export default function Introduccion() {
  return (
    <div className="contenedor-principal">
      <h1 className="titulo-principal">Bienvenido al Diagnóstico diferencial entre Dengue, Chikungunya y Zika</h1>

      <br />
      
      <div className="texto-introduccion" style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#000000' }}>
        <p>
          Este proyecto es una aportación a la sociedad. Es una aproximación desde la inteligencia Artificial al Diagnostico diferencial 
          de enfermedades infecciosas mas comunes en diferentes regiones de Mexico. Consideramos que los datos que aporte este programa 
          son de valor siempre y cuándo se considere el criterio del medico tratante.
        </p>

        <br />

        <br />

      </div>
    </div>
  );
}
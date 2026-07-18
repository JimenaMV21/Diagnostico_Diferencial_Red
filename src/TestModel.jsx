import { useState } from 'react';
import { gruposSintomas } from './sintomasConfig'; 
import { predecirEnfermedad } from './model';
import './App.css';

export default function TestModel() {
  const [selecciones, setSelecciones] = useState({});
  const [categoriaActiva, setCategoriaActiva] = useState(gruposSintomas[0]);
  const [resultado, setResultado] = useState("");

  const manejarCambio = (sintoma) => {
    setSelecciones(prev => ({
      ...prev,
      [sintoma]: !prev[sintoma]
    }));
  };

  const ejecutarPrediccion = async () => {
    const listaCompleta = gruposSintomas.flatMap(g => g.items);
    const arrayParaModelo = listaCompleta.map(sintoma => selecciones[sintoma] ? 1 : 0);
    const res = await predecirEnfermedad(arrayParaModelo);
    setResultado(res);
  };

  return (
    <div className="contenedor-prueba">
      <h2 className="titulo-principal">Diagnóstico diferencial entre Dengue, Chikungunya y Zika</h2>

      <p className="mensaje-box3" style={{ 
  padding: '20px', 
  borderRadius: '15px', 
  color: '#040404',        
  fontSize: '1rem'      
}}>
  <strong> Instructivo: </strong> Personaliza tu consulta seleccionando todos los síntomas que desees incluir en el análisis. Al finalizar, pulsa el botón 'Analizar Enfermedad' para activar nuestro motor de diagnóstico y visualizar la posible afección asociada a los síntomas elegidos 
  </p>

      <br />

      {/* Pestañas de Clasificación */}
      <div className="menu-pestanas">
        {gruposSintomas.map((grupo) => (
          <button 
            key={grupo.titulo}
            onClick={() => setCategoriaActiva(grupo)}
            className={`boton-pestana ${categoriaActiva.titulo === grupo.titulo ? 'activa' : ''}`}
          >
            {grupo.titulo}
          </button>
        ))}
      </div>

      {/* Recuadros de Síntomas (Grid único) */}
<div className="grid-sintomas">
  {categoriaActiva.items.map((sintoma) => (
    <div 
      key={sintoma} 
      className={`tarjeta-sintoma ${selecciones[sintoma] ? 'seleccionada' : ''}`}
      onClick={() => manejarCambio(sintoma)}
    >
      <span>{sintoma}</span>
    </div>
  ))}
</div>

      {/* ... dentro de tu return ... */}

<button onClick={ejecutarPrediccion} className="boton-probar">
  Analizar Enfermedad
</button>

{resultado && (
  <div className="resultado-box">
    <p style={{ margin: 0, color: '#555' }}>Diagnóstico:</p>
    <h3 style={{ marginTop: '5px' }}>{resultado}</h3>
  </div>
)}
    </div>
  );
}
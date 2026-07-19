import { useState } from 'react';
import { gruposSintomas } from './sintomasConfig'; 
import { predecirEnfermedad } from './model';
import './App.css';

export default function TestModel() {
  const [selecciones, setSelecciones] = useState({});
  const [categoriaActiva, setCategoriaActiva] = useState(gruposSintomas[0]);
  const [resultado, setResultado] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const manejarCambio = (sintoma) => {
    setSelecciones(prev => ({
      ...prev,
      [sintoma]: !prev[sintoma]
    }));
  };

  const ejecutarPrediccion = async () => {
    const marcados = Object.values(selecciones).filter(Boolean).length;
    console.log("Síntomas marcados:", marcados);

    if (marcados < 5) {
      setMensajeError("Por favor, selecciona al menos 5 síntomas.");
      setTimeout(() => setMensajeError(""), 3000);
      return; 
    }

    // Si pasa la validación:
    const listaCompleta = gruposSintomas.flatMap(g => g.items);
    const arrayParaModelo = listaCompleta.map(sintoma => selecciones[sintoma] ? 1 : 0);
    
    const res = await predecirEnfermedad(arrayParaModelo);
    setResultado(res);
  };

  return (
    <div className="contenedor-prueba">
      <h2 className="titulo-principal">Diagnóstico diferencial entre Dengue, Chikungunya y Zika</h2>

      <p className="mensaje-box3" style={{ padding: '20px', borderRadius: '15px', color: '#040404', fontSize: '1rem' }}>
        <strong> Instructivo: </strong> Para obtener un análisis preciso, selecciona al menos 5 síntomas observados durante la fase inicial (primeros 5 días tras su 
        aparición). Al completar tu selección, pulsa el botón 'Analizar Enfermedad' para que nuestro modelo de investigación procese los datos y genere una estimación 
        basada en patrones predefinidos
      </p>

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

      {/* Box de Seleccion */}
      {/* Sección de visualización de síntomas */}
<div className="sintomas-seleccionados-box" style={{ 
  marginTop: '20px', 
  marginBottom: '20px', 
  padding: '15px', 
  background: '#f0fdf4', 
  borderRadius: '10px', 
  border: '1px solid #bbf7d0' 
}}>
  <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>Síntomas seleccionados:</p>
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
    {Object.keys(selecciones).filter(s => selecciones[s]).map(sintoma => (
      <span key={sintoma} style={{ 
        background: '#22c55e', 
        color: 'white', 
        padding: '5px 12px', 
        borderRadius: '20px', 
        fontSize: '0.85rem' 
      }}>
        {sintoma}
      </span>
    ))}
    {Object.values(selecciones).filter(Boolean).length === 0 && (
      <span style={{ color: '#666', fontStyle: 'italic' }}>Ningún Síntoma Seleccionado</span>
    )}
  </div>
</div>

      <button 
        onClick={ejecutarPrediccion} 
        className="boton-probar"
      >
        Analizar Enfermedad
      </button>

      {mensajeError && (
        <div style={{
          position: 'fixed',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#dc3545',
          color: 'white',
          padding: '20px 30px',
          borderRadius: '50px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
          zIndex: 9999,
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          {mensajeError}
        </div>
      )}

      {resultado && (
        <div className="resultado-box">
          <p style={{ margin: 0, color: '#555' }}>Diagnóstico:</p>
          <h3 style={{ marginTop: '5px' }}>{resultado}</h3>
        </div>
      )}
    </div>
  );
}
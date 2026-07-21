import { useState } from 'react';
import { gruposSintomas } from './sintomasConfig'; 
import { predecirEnfermedad } from './model';
import './App.css';

import { supabase } from './supabaseClient';

export default function TestModel() {
  const [edad, setEdad] = useState('');
  const [estadoOrigen, setEstadoOrigen] = useState('');
  const [genero, setGenero] = useState('');
  const [viajeReciente, setViajeReciente] = useState('');
  const [diasSintomas, setDiasSintomas] = useState('');

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
    if (!edad || !estadoOrigen || !genero || !viajeReciente || !diasSintomas) {
      setMensajeError("Por favor, completa todas las preguntas de la sección de información general.");
      setTimeout(() => setMensajeError(""), 3500);
      return;
    }

    const marcados = Object.values(selecciones).filter(Boolean).length;
    if (marcados < 5) {
      setMensajeError("Por favor, selecciona al menos 5 síntomas.");
      setTimeout(() => setMensajeError(""), 3000);
      return; 
    }

    const listaCompleta = gruposSintomas.flatMap(g => g.items);
    const arrayParaModelo = listaCompleta.map(sintoma => selecciones[sintoma] ? 1 : 0);
    
    // 1. Obtenemos la predicción de tu modelo de MATLAB
    const res = await predecirEnfermedad(arrayParaModelo);
    setResultado(res);

    // 2. Preparamos el objeto exacto para la base de datos de Supabase
    const nuevoRegistro = {
      edad: parseInt(edad),
      genero: genero,
      estado: estadoOrigen,
      viaje_reciente: viajeReciente,
      dias_sintomas: diasSintomas,
      sintomas: selecciones,
      resultado_diagnostico: res
    };

    // 3. Insertamos los datos en la tabla de Supabase de forma asíncrona
    try {
      const { error } = await supabase
        .from('registros_clinicos')
        .insert([nuevoRegistro]);

      if (error) {
        console.error("Error al guardar en Supabase:", error.message);
      } else {
        console.log("¡Registro guardado exitosamente en la base de datos!");
      }
    } catch (err) {
      console.error("Error de conexión:", err);
    }
  };

  const estadosDeMexico = [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", 
    "Chihuahua", "Ciudad de México", "Coahuila", "Colima", "Durango", "Estado de México", 
    "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit", 
    "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", 
    "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
  ];

  const estiloCampoFormulario = {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '10px',
    border: '1px solid #cbd5e1',
    fontSize: '1rem',
    background: '#ffffff',
    color: '#1e293b',
    boxSizing: 'border-box',
    outline: 'none',
    cursor: 'pointer'
  };

  return (
    <div style={{ width: '100%', maxWidth: '100vw', boxSizing: 'border-box', overflowX: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
      <style>{`
        html, body {
          max-width: 100%;
          overflow-x: hidden !important;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        *, *:before, *:after {
          box-sizing: inherit;
        }
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
          -webkit-appearance: none; 
          margin: 0; 
        }
        input[type=number] {
          -moz-appearance: textfield;
        }
      `}</style>

      <h2 className="titulo-principal" style={{ textAlign: 'center', width: '100%', fontSize: '2.2rem', boxSizing: 'border-box', padding: '0 10px' }}>
        Diagnóstico diferencial entre Influenza, Dengue, Chikungunya y Zika
      </h2>

      <div className="mensaje-box3" style={{ 
        backgroundColor: '#dcffe1', 
        border: '1px solid #e9ecef',
        borderLeft: '4px solid #93dfa5', 
        padding: '20px 24px', 
        borderRadius: '12px', 
        color: '#333333', 
        fontSize: '0.95rem', 
        maxWidth: '800px', 
        width: '100%', 
        textAlign: 'left', 
        margin: '10px 0 20px 0', 
        boxSizing: 'border-box',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)'
      }}>
        <strong style={{ display: 'block', marginBottom: '10px', fontSize: '1rem', color: '#52b485' }}>
            Instructivo:
        </strong>
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.6' }}>
            <li>Ingresa tus datos demográficos y clínicos generales.</li>
            <li>Selecciona al menos 5 síntomas presentes en tu fase inicial.</li>
            <li>Haz clic en <strong>"Analizar Enfermedad"</strong> para procesar la predicción mediante el modelo.</li>
            <li>Los datos se registrarán automáticamente para futuras consultas de investigación.</li>
        </ul>
      </div>

      <br />

      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'left', marginBottom: '8px', boxSizing: 'border-box', padding: '0 5px' }}>
        <h3 style={{ margin: '0', fontSize: '1.1rem', color: '#1e293b', borderBottom: '2px solid #2f7a56', paddingBottom: '8px' }}>
          1. Información General y Antecedentes
        </h3>
      </div>

      <div style={{ 
        maxWidth: '800px', 
        width: '100%', 
        background: '#b2ddcd', 
        padding: '15px', 
        borderRadius: '15px', 
        border: '1px solid #e2e8f0', 
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        marginBottom: '20px',
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', width: '100%', boxSizing: 'border-box' }}>
          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.9rem', color: '#475569' }}>Edad:</label>
            <input 
              type="number" 
              min="1" 
              max="120"
              placeholder="Ej. 25" 
              value={edad} 
              onChange={(e) => setEdad(e.target.value)}
              style={estiloCampoFormulario}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.9rem', color: '#475569' }}>Género:</label>
            <select 
              value={genero} 
              onChange={(e) => setGenero(e.target.value)}
              style={estiloCampoFormulario}
            >
              <option value="">Selecciona género...</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro / Prefiero no decirlo</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.9rem', color: '#475569' }}>Estado de Procedencia:</label>
            <select 
              value={estadoOrigen} 
              onChange={(e) => setEstadoOrigen(e.target.value)}
              style={estiloCampoFormulario}
            >
              <option value="">Selecciona tu estado...</option>
              {estadosDeMexico.map((est) => (
                <option key={est} value={est}>{est}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.9rem', color: '#475569' }}>¿Viaje reciente (últimas 2 sem)?</label>
            <select 
              value={viajeReciente} 
              onChange={(e) => setViajeReciente(e.target.value)}
              style={estiloCampoFormulario}
            >
              <option value="">Selecciona una opción...</option>
              <option value="Si">Sí</option>
              <option value="No">No</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.9rem', color: '#475569' }}>¿Cuántos días llevas con los síntomas?</label>
            <select 
              value={diasSintomas} 
              onChange={(e) => setDiasSintomas(e.target.value)}
              style={estiloCampoFormulario}
            >
              <option value="">Selecciona el rango de días...</option>
              <option value="1-3 dias">De 1 a 3 días (Fase muy temprana)</option>
              <option value="4-5 dias">De 4 a 5 días (Fase inicial clave)</option>
              <option value="Mas de 5 dias">Más de 5 días</option>
            </select>
          </div>
        </div>
      </div>

      <br />

      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'left', marginBottom: '10px', boxSizing: 'border-box', padding: '0 5px' }}>
        <h3 style={{ margin: '0', fontSize: '1.1rem', color: '#1e293b', borderBottom: '2px solid #2f7a56', paddingBottom: '8px' }}>
          2. Selección de Síntomas
        </h3>
      </div>

      <div className="menu-pestanas" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', width: '100%', maxWidth: '800px', boxSizing: 'border-box' }}>
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

      <div className="grid-sintomas" style={{ maxWidth: '800px', width: '100%', boxSizing: 'border-box' }}>
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

      <div className="sintomas-seleccionados-box" style={{ 
        marginTop: '20px', 
        marginBottom: '20px', 
        padding: '15px', 
        background: '#f0fdf4', 
        borderRadius: '10px', 
        border: '1px solid #bbf7d0',
        maxWidth: '800px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>Síntomas seleccionados:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {Object.keys(selecciones).filter(s => selecciones[s]).map(sintoma => (
            <span key={sintoma} style={{ 
              background: '#22c55e', 
              color: 'white', 
              padding: '5px 12px',
              borderRadius: '20px', 
              fontSize: '0.85rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              {sintoma}
              {/* Botón de eliminar (X) */}
              <span 
                onClick={() => manejarCambio(sintoma)}
                style={{ 
                  cursor: 'pointer', 
                  fontWeight: 'bold', 
                  fontSize: '0.9rem',
                  background: 'rgba(0, 0, 0, 0.15)',
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s'
                }}
                title="Eliminar síntoma"
              >
                ×
              </span>
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
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#dc3545',
          color: 'white',
          padding: '15px 20px',
          borderRadius: '50px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
          zIndex: 9999,
          fontWeight: 'bold',
          fontSize: '1rem',
          textAlign: 'center',
          width: '90%',
          maxWidth: '400px',
          boxSizing: 'border-box'
        }}>
          {mensajeError}
        </div>
      )}

      {resultado && (
        <div className="resultado-box" style={{ maxWidth: '800px', width: '100%', boxSizing: 'border-box', textAlign: 'center' }}>
          <p style={{ margin: 0, color: '#555' }}>Diagnóstico:</p>
          <h3 style={{ marginTop: '5px' }}>{resultado}</h3>
        </div>
      )}
    </div>
  );
}
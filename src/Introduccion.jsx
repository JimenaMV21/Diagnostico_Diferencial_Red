import React from 'react';
import videoIA from './Imagenes/VideoIA.mp4';

export default function Introduccion() {
  return (
    <div className="contenedor-principal" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', boxSizing: 'border-box' }}>
      <h1 className="titulo-principal" style={{ textAlign: 'center', marginBottom: '20px' }}>
        Diagnóstico Diferencial entre Influenza, Dengue, Chikungunya y Zika
      </h1>
      
      <div className="texto-introduccion" style={{ 
        fontSize: '1.15rem', 
        lineHeight: '1.6', 
        color: '#ffffff', // Cambiado a blanco para que resalte sobre el fondo oscuro
        backgroundColor: '#0a192f',
        padding: '25px',
        borderRadius: '16px',
        border: '1px solid #1e3a5f',
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
        marginBottom: '40px',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0 }}>
          Este proyecto es una aportación a la sociedad. Es una aproximación desde la Inteligencia Artificial al diagnóstico diferencial 
          de enfermedades infecciosas más comunes en diferentes regiones de México. Consideramos que los datos que aporte este programa 
          son de valor siempre y cuándo se considere el criterio del médico tratante.
        </p>
      </div>

      {/* Sección de 4 tarjetas estilo oscuro */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
        gap: '20px', 
        width: '100%',
        boxSizing: 'border-box' 
      }}>
        
        {/* Tarjeta 1 */}
        <div style={{ 
          background: 'linear-gradient(145deg, #0f233f 0%, #0a192f 100%)', 
          border: '1px solid #1e3a5f', 
          borderTop: '3px solid #38bdf8', 
          padding: '24px', 
          borderRadius: '16px',
          boxSizing: 'border-box',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          <div style={{ 
            width: '45px', 
            height: '45px', 
            borderRadius: '12px', 
            background: 'rgba(56, 189, 248, 0.1)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: '#38bdf8',
            fontSize: '1.2rem'
          }}>
            🔗
          </div>
          <h3 style={{ color: '#ffffff', fontSize: '1.1rem', margin: 0, lineHeight: '1.4' }}>
            Modelo de aprendizaje automático
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>
            Regresión logística multinomial (softmax) entrenada sobre 67 signos y síntomas. Devuelve la probabilidad relativa de cada enfermedad a partir de patrones clínicos, no una regla fija.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div style={{ 
          background: 'linear-gradient(145deg, #0f233f 0%, #0a192f 100%)', 
          border: '1px solid #1e3a5f', 
          borderTop: '3px solid #38bdf8', 
          padding: '24px', 
          borderRadius: '16px',
          boxSizing: 'border-box',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          <div style={{ 
            width: '45px', 
            height: '45px', 
            borderRadius: '12px', 
            background: 'rgba(56, 189, 248, 0.1)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: '#38bdf8',
            fontSize: '1.2rem'
          }}>
            📍
          </div>
          <h3 style={{ color: '#ffffff', fontSize: '1.1rem', margin: 0, lineHeight: '1.4' }}>
            Prior bayesiano • edad y territorio
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>
            Un componente bayesiano reajusta las probabilidades según la edad, la región y la temporada epidemiológica, combinando la IA con principios estadísticos consolidados.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div style={{ 
          background: 'linear-gradient(145deg, #0f233f 0%, #0a192f 100%)', 
          border: '1px solid #1e3a5f', 
          borderTop: '3px solid #38bdf8', 
          padding: '24px', 
          borderRadius: '16px',
          boxSizing: 'border-box',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          <div style={{ 
            width: '45px', 
            height: '45px', 
            borderRadius: '12px', 
            background: 'rgba(56, 189, 248, 0.1)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: '#38bdf8',
            fontSize: '1.2rem'
          }}>
            🛡️
          </div>
          <h3 style={{ color: '#ffffff', fontSize: '1.1rem', margin: 0, lineHeight: '1.4' }}>
            Gravedad del dengue • OMS 2009 • PRONAM
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>
            Para dengue integra la clasificación de gravedad (sin signos de alarma / con signos de alarma / grave) alineada al PRONAM 2026, útil en triage y vigilancia.
          </p>
        </div>

        {/* Tarjeta 4 */}
        <div style={{ 
          background: 'linear-gradient(145deg, #0f233f 0%, #0a192f 100%)', 
          border: '1px solid #1e3a5f', 
          borderTop: '3px solid #38bdf8', 
          padding: '24px', 
          borderRadius: '16px',
          boxSizing: 'border-box',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          <div style={{ 
            width: '45px', 
            height: '45px', 
            borderRadius: '12px', 
            background: 'rgba(56, 189, 248, 0.1)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: '#38bdf8',
            fontSize: '1.2rem'
          }}>
            🩺
          </div>
          <h3 style={{ color: '#ffffff', fontSize: '1.1rem', margin: 0, lineHeight: '1.4' }}>
            Apoyo clínico, no diagnóstico
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>
            Es un recurso de apoyo a la decisión y la vigilancia epidemiológica. Cada resultado es una estimación y no reemplaza el juicio clínico ni el diagnóstico profesional.
          </p>
        </div>

      </div>

      {/* Tarjeta del Video */}
      <div style={{ 
        maxWidth: '800px', 
        width: '100%', 
        margin: '40px auto 20px auto', 
        background: 'linear-gradient(145deg, #0f233f 0%, #0a192f 100%)', 
        border: '1px solid #1e3a5f', 
        padding: '24px', 
        borderRadius: '16px', 
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
        boxSizing: 'border-box',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '15px' }}>
          🎥 Introduccion a nuestra herramienta Utilizada
        </h3>
        
        {/* Contenedor del video local */}
        <div style={{ 
          width: '100%', 
          overflow: 'hidden', 
          borderRadius: '12px',
          backgroundColor: '#000'
        }}>
          <video 
            controls 
            style={{ width: '100%', maxHeight: '450px', borderRadius: '12px', display: 'block' }}
          >
            <source src={videoIA} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
      </div>

    </div>
  );
}
import React from 'react';

export default function Disclaimer() {
  return (
    <footer style={{ 
      marginTop: '40px', 
      borderTop: '1px solid #dee2e6', 
      backgroundColor: '#ffffff',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Contenedor principal de dos columnas */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        padding: '30px 20px', 
        gap: '30px', 
        maxWidth: '900px', 
        margin: '0 auto',
        boxSizing: 'border-box'
      }}>
        
        {/* Columna 1: Aviso Legal */}
        <div style={{ 
          flex: '1 1 350px', 
          boxSizing: 'border-box' 
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#00C3D7', fontSize: '1.1rem' }}>
            Aviso Legal
          </h4>
          <p style={{ fontSize: '0.9rem', color: '#555', textAlign: 'justify', lineHeight: '1.5', margin: 0 }}>
            Esta herramienta tiene fines exclusivamente informativos. 
            No constituye un programa médico ni sustituye el diagnóstico, tratamiento o consejo de un profesional de la salud. 
            Por favor, consulte a un médico ante cualquier síntoma, duda o preocupación sobre su estado de salud.
          </p>
        </div>
        
        {/* Columna 2: Correspondencia */}
        <div style={{ 
          flex: '1 1 350px', 
          boxSizing: 'border-box' 
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#00C3D7', fontSize: '1.1rem' }}>
            Correspondencia
          </h4>

          <p style={{ fontSize: '0.9rem', color: '#555', margin: '0 0 12px 0', lineHeight: '1.4' }}>
            Carlos Mauricio Lastre Dominguez
            <br /><strong>carlos.lastre@itoaxaca.edu.mx</strong>
          </p>

          <p style={{ fontSize: '0.9rem', color: '#555', margin: '0 0 12px 0', lineHeight: '1.4' }}>
            Eduardo Lorenzo Pérez Campos
            <br /><strong>pcampos@itoaxaca.edu.mx</strong>
          </p>

          <p style={{ fontSize: '0.9rem', color: '#555', margin: 0, lineHeight: '1.4' }}>
            Héctor Alejandro Cabrera Fuentes
            <br /><strong>hector.cf@tectijuana.edu.mx</strong>
          </p>
        </div>

      </div>
    </footer>
  );
}
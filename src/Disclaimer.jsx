// src/Disclaimer.jsx
import React from 'react';

export default function Disclaimer() {
  return (
    <footer style={{
      marginTop: '40px',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderTop: '1px solid #dee2e6',
      textAlign: 'center',
      fontSize: '0.85rem',
      color: '#6c757d'
    }}>
      <p>
        <strong>Aviso Legal:</strong> Esta herramienta tiene fines exclusivamente informativos. 
        No constituye un programa médico ni sustituye el diagnóstico, tratamiento o consejo de un profesional de la salud. 
        Por favor, consulte a un médico ante cualquier síntoma o duda sobre su estado de salud.
      </p>
    </footer>
  );
}
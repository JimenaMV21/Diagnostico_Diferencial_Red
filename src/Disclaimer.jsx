import React from 'react';


export default function Disclaimer() {
  return (
    <footer style={{ marginTop: '40px', borderTop: '1px solid #dee2e6', backgroundColor: '#f8f9fa' }}>
      
      {/* Sección de dos columnas */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        padding: '20px', 
        gap: '20px', 
        maxWidth: '800px', 
        margin: '0 auto' 
      }}>
        <div style={{ 
  display: 'flex', 
  flexWrap: 'wrap', 
  padding: '10px', 
  gap: '5px', 
  maxWidth: '500px',
  margin: '0 auto' 
}}>
          <h4 style={{ margin: '0 0 10px 0', justifyContent:'center',  flex: '2', minWidth: '250px', color: '#7bb588' }}>Aviso Legal</h4>
          
          <p style={{ fontSize: '0.9rem', color: '#555', textAlign: 'justify' }}>
            Esta herramienta tiene fines exclusivamente informativos. 
  No constituye un programa médico ni sustituye el diagnóstico, tratamiento o consejo de un profesional de la salud. 
   Por favor, consulte a un médico ante cualquier síntoma, duda o preocupación sobre su estado de salud
            
          </p>
        </div>
        
        <div style={{ flex: '2', minWidth: '250px' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#7bb588' }}>Correspondecia</h4>

          <p style={{ fontSize: '0.9rem', color: '#555' }}>
            Carlos Mauricio Lastre Dominguez
            <br /><strong>carlos.lastre@itoaxaca.edu.mx</strong>
          </p>

          <p style={{ fontSize: '0.9rem', color: '#555' }}>
            Eduardo Lorenzo Pérez Campos
            <br /><strong>pcampos@itoaxaca.edu.mx</strong>
          </p>

          <p style={{ fontSize: '0.9rem', color: '#555' }}>
            Héctor Alejandro Cabrera Fuentes
            <br /><strong>hector.cf@tectijuana.edu.mx</strong>
          </p>

        </div>
      </div>

      <br />
      
    </footer>
  );
}
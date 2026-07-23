import React from 'react';


export default function Agradecimientos({ setPagina }) {
  return (
    <div className="contenedor-principal" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 className="titulo-principal">Agradecimientos</h1>
      {/* <br /> */}
      <p className="mensaje-box2" style={{ 
  padding: '20px', 
  borderRadius: '15px', 
  color: '#ffffff',        
  fontSize: '1.2rem'      
}}>A continuacion se presentan a las personas que hicieron posible este proyecto.</p>
      <div className="mensaje-box" style={{ 
  padding: '20px', 
  background: '#ffffff', 
  borderRadius: '15px', 
  color: '#06294B',        
  fontSize: '1.3rem'      
}}>
        <p>Agradecemos a:  
            La Secretaría de Ciencia, Humanidades, Tecnología e Innovación (Secihti) por la beca otorgada al estudiante de doctorado Elí Cruz Parada (CVU 1003542)
            <br />
            <br />
            Tecnológico Nacional de Mexico/Instituto Tecnológico de Oaxaca (TecNM/ITO), Instituto Tecnológico de Tijuana
            <br />
                    </p>
      </div> 

      <button 
        className="boton-probar" 
        onClick={() => setPagina('Introduccion')} 
        style={{ marginTop: '20px' }}
      >
        Volver al Inicio
      </button>

    

    </div>

  );
}
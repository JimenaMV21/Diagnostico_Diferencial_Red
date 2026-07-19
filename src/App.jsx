import { useState } from 'react';
import TestModel from './TestModel';
import Agradecimientos from './Agradecimientos';
import Colaborador from './Colaborador';
import Introduccion from './Introduccion';
import Disclaimer from './Disclaimer';

// importacion imagenes
import logoTec from './Imagenes/logo-Tec.jpeg';
import logoTecT from './Imagenes/logo-TecT.jpeg';
import logoSecihti from './Imagenes/logo-SE.jpeg';
import logoUao from './Imagenes/logo-uao.jpg';
import logoUabjo from './Imagenes/logo-Uabjo.jpeg';

import './App.css';

function App() {
  const [abierto, setAbierto] = useState(false);
  const [pagina, setPagina] = useState('Prueba');

  return (
    <div className="app-container">
      {/* Botón de Menú simple */}
      <button className="boton-menu" onClick={() => setAbierto(true)}>☰</button>

      {/* Sidebar */}
      <nav className={`sidebar ${abierto ? 'abierto' : ''}`}>
        <button className="btn-cerrar" onClick={() => setAbierto(false)}>&times;</button>
        <div className="menu-links">
          {/* Nuevos links añadidos */}
          <a onClick={() => { setPagina('Introduccion'); setAbierto(false); }}>Introducción</a>
          <a onClick={() => { setPagina('Prueba'); setAbierto(false); }}>Diagnóstico diferencial</a>
          <a onClick={() => { setPagina('Colaboradores'); setAbierto(false); }}>Colaboradores</a>
          <a onClick={() => { setPagina('Agradecimientos'); setAbierto(false); }}>Agradecimientos</a>
        </div>
      </nav>

      {/* Contenido dinámico */}
      <main className="main-content">
        {pagina === 'Introduccion' && <Introduccion setPagina={setPagina} />}
        
        {pagina === 'Prueba' && <TestModel />}

        {pagina === 'Colaboradores' && (
  <div className="contenedor-principal">
    <h1 className="titulo-principal">Colaboradores</h1>
    
    <div className="grid-colaboradores">
      <Colaborador nombre="Eli Cruz Parada" especialidad="TecNM" />
      <Colaborador nombre="Carlos Mauricio Lastre Domínguez" especialidad="TecNM" />
      <Colaborador nombre="Eduardo Lorenzo Pérez Campos" especialidad="TecNM" />
      <Colaborador nombre="Laura Pérez Campos Mayoral" especialidad="UABJO" />
      <Colaborador nombre="María Teresa Hernández Huerta" especialidad="SECIHTI / UABJO" />
      <Colaborador nombre="Aldo Eleazar Pérez Ramos," especialidad="TecNM" />
      <Colaborador nombre="Héctor Alejandro Cabrera Fuentes" especialidad="TecNM" />
      <Colaborador nombre="Guillermina Vivar Estudillo" especialidad="UABJO" />
      <Colaborador nombre="Margarito Martínez Cruz" especialidad="TecNM" />
      <Colaborador nombre="Carlos Romero Díaz" especialidad="TecNM" />
      <Colaborador nombre="Alma Dolores Pérez Santiago" especialidad="TecNM" />
      <Colaborador nombre="Iván Antonio García Montalvo" especialidad="TecNM" />
      <Colaborador nombre="Miriam Emily Avendaño Villegas" especialidad="TecNM" />
      <Colaborador nombre="Eduardo Pérez Campos Mayoral" especialidad="UABJO" />
      <Colaborador nombre="Socorro Pina Canseco" especialidad="UABJO" />
      <Colaborador nombre="Jimena Morales Villagómez" especialidad="UAO" />
      <Colaborador nombre="Eduardo Alberto Mayoral Pérez Campos" especialidad="UAO" />
    </div>

    {/* logos */}
    <div className="contenedor-logos">
  <img src={logoUabjo} alt="Universidad-Autonoma-Oaxaca" className="logo-base logo-pequeno" />
  <img src={logoTecT} alt="Universidad-Tec-Tijuna" className="logo-base logo-pequeno" />
  <img src={logoTec} alt="Universidad-Tec-Oaxaca" className="logo-base logo-grande" />
  <img src={logoSecihti} alt="Secretaria-Secihti" className="logo-base logo-pequeno" />
  <img src={logoUao} alt="Universidad-Anahuac-Oaxaca" className="logo-base logo-pequeno" />
</div>

  </div>
  
)}
        
        {pagina === 'Agradecimientos' && <Agradecimientos setPagina={setPagina} />}
      </main>

      <Disclaimer />
    </div>
  );
}

export default App;
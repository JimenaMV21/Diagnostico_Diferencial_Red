import React from 'react';
import './App.css';

function Referencias({ setPagina }) {
  // Lista de referencias bibliográficas
  const listaReferencias = [
    {
      autores: "Salvador Ibarra IJ, Mora Guzmán Z, Borrás Enríquez AJ, Alpuche J, Castañeda-Hernández G, Pérez-Campos E, Hernández-Huerta MT, Cabrera-Fuentes HA.",
      titulo: "Proteomic signals are not equal clinical phenotypes: redefining evidence standards in arbovirus-SARS-CoV-2 cross-reactivity.",
      revista: "Front Immunol. 2026;17:1849848.",
      doi: "10.3389/fimmu.2026.1849848",
      enlace: "https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2026.1849848/full"
    },

    {
      autores: "Ojeda Meixueiro VH, Hernández-Huerta MT, Pérez-Campos Mayoral L, Cruz Parada E, López Ortiz JO, Gatica Valdez N, Pina Canseco MDS, Pérez-Campos Mayoral E, Martínez Cruz M, Lastre Domínguez C, López Regalado D, Martínez Ruiz H, Avendaño Villegas ME, Vásquez Diaz PR, Macjluf Cruz A, Cruz Hernández V, Jarquín González EE, Cabrera-Fuentes HA, Pérez-Campos E.",
      titulo: "Using Data Mining to Differentiate Dengue with Warning Signs from Severe Dengue: A Predictive Model from Oaxaca, Mexico",
      revista: "Am J Trop Med Hyg. 2025;113(3):508-515",
      doi: "10.4269/ajtmh.24-0742",
      enlace: "https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2026.1849848/full" //Falta este link
    },

    {
      autores: "Cruz-Parada E, Vivar-Estudillo G, Pérez-Campos Mayoral L, Hernández-Huerta MT, Pérez-Santiago AD, Romero-Diaz C, Pérez-Campos Mayoral E, Montalvo IAG, Martínez-Martínez L, Martínez-Ruiz H, Matadamas I, Avendaño-Villegas ME, Martínez Cruz M, Cabrera-Fuentes HA, Pérez-Ramos AE, Pérez-Campos EL, Lastre-Domínguez CM.",
      titulo: "Proof-of-Concept Machine Learning Framework for Arboviral Disease Classification Using Literature-Derived Synthetic Data: Methodological Development Preceding Clinical Validation",
      revista: "Healthcare (Basel). 2026 Jan 19;14(2):247",
      doi: "10.3390/healthcare14020247",
      enlace: "https://www.mdpi.com/2227-9032/14/2/247"
    },

    {
      autores: "Cruz-Parada E, Vivar-Estudillo G, Pérez-Campos Mayoral L, Sánchez Medina MA, Pérez-Campos E, Lastre-Domínguez C.",
      titulo: "Harnessing Machine Learning for Early and Accurate Diagnosis of Mosquito-Borne Diseases: A Case Study on Dengue, Zika, and Chikungunya",
      revista: "Artificial Intelligence – COMIA 2025 17th Mexican Congress Proceedings, Part III; 2025 Mayo 12-16; Ciudad de México, México. Communications in Computer and Information Science (CCIS,volume 2554 (pp.244-254) Springer, Cham ",
      doi: "10.1007/978-3-031-97913-2_20",
      enlace: "https://www.mdpi.com/2227-9032/14/2/247" //Falta link
    },

    {
      autores: "Cruz-Parada, E., Vivar-Estudillo, G., Pérez-Campos Mayoral, L., Hernández-Huerta, M. T., Pérez-Santiago, A. D., Romero-Diaz, C., Mayoral, E. P.-C., García-Montalvo, I. A., Martínez-Martínez, L., Martínez-Ruiz, H., Matadamas, I., Avendaño-Villegas, M. E., Cruz, M. M., Cabrera-Fuentes, H. A., Pérez-Ramos, A. E., Pérez-Campos, E. L., & Lastre-Domínguez, C. M. (2026).",
      titulo: "Synthetic and Encoded Database of Dengue, Zika, Chikungunya, and Influenza Derived from the Literature",
      revista: "Artificial Intelligence – COMIA 2025 17th Mexican Congress Proceedings, Part III; 2025 Mayo 12-16; Ciudad de México, México. Communications in Computer and Information Science (CCIS,volume 2554 (pp.244-254) Springer, Cham ",
      doi: "10.1007/978-3-031-97913-2_20", //Falta el DOI
      enlace: "https://doi.org/10.3390/data11020033"
    },
  ];

  return (
    <div className="contenedor-principal">
      <h1 className="titulo-principal">Referencias Bibliográficas</h1>
      <p className="subtitulo-seccion">
        Documentación científica y bases de respaldo del modelo de investigación clínica:
      </p>

      <div className="grid-referencias">
        {listaReferencias.map((ref, index) => (
          <div key={index} className="tarjeta-referencia">
            <p className="ref-autores"><strong>Autores:</strong> {ref.autores}</p>
            <p className="ref-titulo"><strong>Artículo:</strong> "{ref.titulo}"</p>
            <p className="ref-revista"><em>{ref.revista}</em></p>
            <div className="ref-enlaces">
              <span className="ref-doi">DOI: {ref.doi}</span>
              <a 
                href={ref.enlace} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-enlace-ref"
              >
                Ver artículo completo ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Referencias;
import React from 'react';
import '../Estilos/informacion.css'; // Asegúrate de tener un archivo CSS específico para este componente

const Informacion = () => {
  return (
    <div className="cuadro">
      <h1>Guía de Cifrados</h1>
      <p>En esta sección puedes leer información sobre diferentes tipos de cifrado.</p>
      <ul>
        <li>
          <b>Cifrado César</b>: Un cifrado por sustitución en el que cada letra es reemplazada por otra que se encuentra un número fijo de posiciones adelante en el alfabeto.
        </li>
        <li>
          <b>Escítala</b>: Un antiguo dispositivo de cifrado usado por los espartanos, basado en un cilindro alrededor del cual se enrolla una tira de cuero o papiro que contiene el mensaje cifrado.
        </li>
        <li>
          <b>Cifrado de sustitución</b>: Un método en el que cada letra del alfabeto es reemplazada por otra letra o símbolo, siguiendo un esquema específico.
        </li>
        <li>
          <b>Cifrado de transposición</b>: Un método en el que las letras del mensaje original se reorganizan según un patrón predefinido.
        </li>
      </ul>

      <h2>Comparación: Cifrado César vs. Escítala</h2>
      <table>
        <thead>
          <tr>
            <th>Aspecto</th>
            <th>Cifrado César</th>
            <th>Escítala</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tipo de Cifrado</td>
            <td>Sustitución</td>
            <td>Transposición</td>
          </tr>
          <tr>
            <td>Clave</td>
            <td>Desplazamiento fijo de letras</td>
            <td>Cilindro con longitud variable</td>
          </tr>
          <tr>
            <td>Facilidad de uso</td>
            <td>Fácil de implementar</td>
            <td>Requiere un dispositivo físico</td>
          </tr>
          <tr>
            <td>Seguridad</td>
            <td>Poca seguridad contra ataques modernos</td>
            <td>Más complejo, pero susceptible a análisis de frecuencia</td>
          </tr>
          <tr>
            <td>Historia</td>
            <td>Utilizado por Julio César</td>
            <td>Utilizado por los espartanos</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Informacion;

import React, { useState } from 'react';
import '../Estilos/escitala.css'; 

function Escitala() {
  const [texto, setTexto] = useState('');
  const [longitud, setLongitud] = useState(0); 
  const [resultado, setResultado] = useState('');
  const [matrizDescifrada, setMatrizDescifrada] = useState([]);
  const [mostrarGuia, setMostrarGuia] = useState(false); 

  // Función para cifrar el texto usando el método de Escítala
  const cifrar = (texto, longitud) => {
    const filas = Math.ceil(texto.length / longitud);
    const matriz = [];

    // Llenar la matriz
    for (let i = 0; i < filas; i++) {
      matriz[i] = texto.slice(i * longitud, i * longitud + longitud).split('');
    }

    // Leer la matriz en columnas
    let resultado = '';
    for (let i = 0; i < longitud; i++) {
      for (let j = 0; j < filas; j++) {
        if (matriz[j][i]) {
          resultado += matriz[j][i];
        }
      }
    }

    return resultado; 
  };

 
  const descifrar = (texto, longitud) => {
    const filas = Math.ceil(texto.length / longitud);
    const matriz = Array.from({ length: filas }, () => Array(longitud).fill(''));

    // Llenar la matriz en columnas
    let index = 0;
    for (let i = 0; i < longitud; i++) {
      for (let j = 0; j < filas; j++) {
        if (index < texto.length) {
          matriz[j][i] = texto[index++];
        }
      }
    }

    // Leer la matriz en filas
    let resultado = '';
    for (let i = 0; i < filas; i++) {
      resultado += matriz[i].join('');
    }

    setMatrizDescifrada(matriz); // Guardar la matriz descifrada
    return resultado.trim(); // Devolver el resultado descifrado
  };

  // Función para copiar el resultado al portapapeles
  const handleCopy = () => {
    navigator.clipboard.writeText(resultado)
      .then(() => {
        alert('Texto copiado al portapapeles');
      })
      .catch(err => {
        console.error('Error al copiar el texto: ', err);
      });
  };

  // Manejador para el botón de cifrar
  const handleCifrar = () => {
    const resultadoCifrado = cifrar(texto, longitud);
    setResultado(resultadoCifrado);
    setMatrizDescifrada([]); // Limpiar la matriz al cifrar
  };

  // Manejador para el botón de descifrar
  const handleDescifrar = () => {
    const resultadoDescifrado = descifrar(texto, longitud);
    setResultado(resultadoDescifrado);
  };

  // Manejador para mostrar/ocultar la guía
  const toggleGuia = () => {
    setMostrarGuia(!mostrarGuia);
  };

  return (
    <div className="cuadro-escitala">
      <h1>Cifrado Escítala</h1>
      <input
        type="text"
        value={texto}
        placeholder="Ingresa el texto"
        onChange={(e) => setTexto(e.target.value)}
      />
      <input
        type="number"
        value={longitud}
        placeholder="Longitud (número de columnas)"
        onChange={(e) => setLongitud(Number(e.target.value))}
      />
      
      {/* Agrupar los botones de cifrar y descifrar */}
      <div className="botones-cifrado">
        <button onClick={handleCifrar}>Cifrar</button>
        <button onClick={handleDescifrar}>Descifrar</button>
      </div>

      <button onClick={toggleGuia}>{mostrarGuia ? 'Ocultar Guía' : 'Mostrar Guía'}</button>
      
      <h2>Resultado:</h2>
      <div className="resultado">{resultado}</div>
      <button onClick={handleCopy} disabled={!resultado}>
        Copiar Resultado
      </button>

      {/* Mostrar la matriz descifrada en forma de tabla */}
      {matrizDescifrada.length > 0 && (
        <div>
          <h2>Descifrada:</h2>
          <table>
            <tbody>
              {matrizDescifrada.map((fila, index) => (
                <tr key={index}>
                  {fila.map((celda, idx) => (
                    <td key={idx}>{celda}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Mostrar el recuadro de la guía si está activado */}
      {mostrarGuia && (
        <div className="guia-recuadro">
          <h2>Guía del Cifrado Escítala</h2>
          <p>El cifrado de Escítala es un método antiguo donde se organiza el texto en columnas.</p>
          <p>Para descifrar, se invierte el proceso:</p>
          <ol>
            <li>Ingresa el mensaje a cifrar o descifrar.</li>
            <li>Introduce la clave que representa el número de columnas.</li>
            <li>Presiona "Cifrar" o "Descifrar".</li>
            <li>Puedes copiar el resultado con el botón "Copiar Texto".</li>
          </ol>
          <p>Ejemplo: Para un mensaje "HOLA" con 2 columnas, el resultado será "HOAL".</p>
        </div>
      )}
    </div>
  );
}

export default Escitala;
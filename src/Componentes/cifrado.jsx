import React, { useState } from 'react';
import '../Estilos/cifrado.css'; // Asegúrate de que la ruta sea correcta

function CifradoCesar() {
  const [texto, setTexto] = useState('');
  const [desplazamiento, setDesplazamiento] = useState(0); // Desplazamiento por defecto
  const [resultado, setResultado] = useState('');
  const [mostrarGuia, setMostrarGuia] = useState(false); // Estado para controlar la visibilidad de la guía

  // Función para cifrar el texto usando Cifrado César
  const cifrar = (texto, desplazamiento) => {
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
      let char = texto[i];

      if (char.match(/[A-Z]/)) {
        resultado += String.fromCharCode(
          ((char.charCodeAt(0) - 65 + desplazamiento) % 26) + 65
        );
      } else if (char.match(/[a-z]/)) {
        resultado += String.fromCharCode(
          ((char.charCodeAt(0) - 97 + desplazamiento) % 26) + 97
        );
      } else {
        resultado += char; // No cifra caracteres que no sean letras
      }
    }

    return resultado; // Devolver el resultado cifrado
  };

  // Función para descifrar el texto usando Cifrado César
  const descifrar = (texto, desplazamiento) => {
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
      let char = texto[i];

      if (char.match(/[A-Z]/)) {
        resultado += String.fromCharCode(
          ((char.charCodeAt(0) - 65 - desplazamiento + 26) % 26) + 65
        );
      } else if (char.match(/[a-z]/)) {
        resultado += String.fromCharCode(
          ((char.charCodeAt(0) - 97 - desplazamiento + 26) % 26) + 97
        );
      } else {
        resultado += char; // No descifra caracteres que no sean letras
      }
    }

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
    const resultadoCifrado = cifrar(texto, desplazamiento);
    setResultado(resultadoCifrado);
  };

  // Manejador para el botón de descifrar
  const handleDescifrar = () => {
    const resultadoDescifrado = descifrar(texto, desplazamiento);
    setResultado(resultadoDescifrado);
  };

  // Manejador para mostrar/ocultar la guía
  const toggleGuia = () => {
    setMostrarGuia(!mostrarGuia);
  };

  return (
    <div className="cuadro-cesar">
        <h1>Cifrado César</h1>
        <input
            type="text"
            value={texto}
            placeholder="Ingresa el texto"
            onChange={(e) => setTexto(e.target.value)}
        />
        <input
            type="number"
            value={desplazamiento}
            placeholder="Desplazamiento (número)"
            onChange={(e) => setDesplazamiento(Number(e.target.value))}
        />

        {/* Contenedor para los botones de cifrar y descifrar */}
        <div className="boton-container">
            <button onClick={handleCifrar}>Cifrar</button>
            <button onClick={handleDescifrar}>Descifrar</button>
        </div>

        <button onClick={toggleGuia}>{mostrarGuia ? 'Ocultar Guía' : 'Mostrar Guía'}</button>

        <h2>Resultado:</h2>
        <div className="resultado">{resultado}</div>
        <button onClick={handleCopy} disabled={!resultado}>
            Copiar Resultado
        </button>

        {/* Mostrar el recuadro de la guía si está activado */}
        {mostrarGuia && (
            <div className="guia-recuadro">
                <h2>Guía del Cifrado César</h2>
                <p>El cifrado César es un método de cifrado por sustitución donde cada letra se desplaza un número fijo de lugares en el alfabeto.</p>
                <p>Para cifrar o descifrar, sigue estos pasos:</p>
                <ol>
                    <li>Ingresa el mensaje a cifrar o descifrar.</li>
                    <li>Introduce el número de desplazamiento.</li>
                    <li>Presiona "Cifrar" o "Descifrar".</li>
                    <li>Puedes copiar el resultado con el botón "Copiar Resultado".</li>
                </ol>
                <p>Ejemplo: Para un desplazamiento de 3, la letra 'A' se convierte en 'D'.</p>
            </div>
        )}
    </div>
);

}

export default CifradoCesar;

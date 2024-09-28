import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Cifrado from './Componentes/cifrado'; 
import Escitala from './Componentes/escitala'; 
import Información from './Componentes/informacion';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Botones para navegar, estarán siempre en la parte superior */}
        <nav className="nav-buttons">
          <Link to="/cifrado-cesar">
            <button>Cifrado César</button>
          </Link>
          <Link to="/escitala">
            <button>Cifrado Escítala</button>
          </Link>
          <Link to="/informacion">
            <button>Información</button>
          </Link>
        </nav>

        {/* Contenido principal, cambiará según la ruta */}
        <div className="content">
          <Routes>
            <Route path="/cifrado-cesar" element={<Cifrado />} />
            <Route path="/escitala" element={<Escitala />} />
            <Route path="/informacion" element={<Información />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


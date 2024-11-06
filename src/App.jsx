import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Pag1 from './paginas/pag1/pag1';
import Pag2 from './paginas/pag2/pag2'; // Importa tus nuevas páginas aquí
 // Agrega más páginas según sea necesario
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        {/* Ruta raíz que renderiza Pag1 */}
        <Route path="/" element={<Pag1 />} />
        {/* Otras rutas */}
        <Route path="/pag2" element={<Pag2 />} />
        
      </Routes>
    </Router>
  );
}

export default App;

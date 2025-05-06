import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Carros from './pages/carros';
import Conductores from './pages/Conductores';
import Configuracion from './pages/Configuracion';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px', textAlign: 'align-right' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carros" element={<Carros />} />
          <Route path="/conductores" element={<Conductores />} />
          <Route path="/configuracion" element={<Configuracion />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
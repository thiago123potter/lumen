import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import MapaConsciencial from "./pages/MapaConsciencial";
import Dashboard from "./pages/Dashboard";

function App() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white text-gray-900 font-sans">
        <header className="bg-white shadow py-4 px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-700 tracking-wide">🕯️ LUMEN</h1>
          <nav>
            <button onClick={() => setMenuAberto(!menuAberto)} className="md:hidden">☰</button>
            <ul className={`md:flex space-x-6 ${menuAberto ? "block" : "hidden"} md:block`}>
              <li><Link to="/" className="hover:text-indigo-500">Início</Link></li>
              <li><Link to="/mapa" className="hover:text-indigo-500">Mapa Consciencial</Link></li>
              <li><Link to="/dashboard" className="hover:text-indigo-500">Dashboard</Link></li>
            </ul>
          </nav>
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<p>🌟 Bem-vinde à jornada LUMEN</p>} />
            <Route path="/mapa" element={<MapaConsciencial />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

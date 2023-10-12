import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from './components/Header';
import PokemonTable from "./components/PokemonTable";

function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<PokemonTable />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

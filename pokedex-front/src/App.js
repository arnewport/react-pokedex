import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PokemonTable from "./components/PokemonTable";

function App() {
  return (
    <Router>
      <main className="container">
        <Routes>
          <Route path="/" element={<PokemonTable />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

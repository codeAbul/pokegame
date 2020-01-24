import React from "react";
import "./App.css";
import PokeGame from "./components/PokeGame";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>Pokegame!</header>
      <main>
        <PokeGame />
      </main>
    </div>
  );
};

export default App;

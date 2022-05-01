import React from 'react';
import './App.css';
import Board from "./components/Board";
import GameMeta from "./components/GameMeta";

function App() {
    return (
        <div>
            <GameMeta/>
            <Board/>
        </div>
    );
}

export default App;

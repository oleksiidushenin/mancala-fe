import React from 'react';
import './App.css';
import Board from "./components/Board";
import GameMeta from "./components/GameMeta";
import GameProvider from "./store/GameProvider";

function App() {
    return (
        <GameProvider>
            <GameMeta/>
            <Board/>
        </GameProvider>
    );
}

export default App;

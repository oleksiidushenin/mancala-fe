import React from "react";
import Game from "../domain/Game"

export type GameContextType = {
    game: Game;
    resetGame: () => void;
    selectPit: (index: number) => void
}

const GameContext = React.createContext<GameContextType>({
    game: new Game(),
    resetGame: () => {
    },
    selectPit: (number) => {
    }
});

export default GameContext;

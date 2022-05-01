import React from "react";
import Game from "../domain/Game"

export type GameContextType = {
    game: Game;
    resetGame: () => void;
}

const GameContext = React.createContext<GameContextType>({
    game: new Game(),
    resetGame: () => {
    }
});

export default GameContext;

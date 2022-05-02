import React from "react";
import Game from "../domain/Game"
import {createGame} from "../domain/GameService";

export type GameContextType = {
    game: Game;
    resetGame: () => void;
    selectPit: (index: number) => void
}

const GameContext = React.createContext<GameContextType>({
    game: createGame(),
    resetGame: () => {
    },
    selectPit: (number) => {
    }
});

export default GameContext;

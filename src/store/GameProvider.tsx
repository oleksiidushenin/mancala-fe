import GameContext, {GameContextType} from "./game-context";
import React, {useState} from "react";
import Game from "../domain/Game";

const GameProvider = (props: { children: React.ReactNode | null }) => {
    const [game, setGame] = useState<Game>(new Game());

    const resetGameHandler = () => {
        setGame(new Game());
        console.log("Context. Reset Game");
    }

    const selectPitHandler = (index: number) => {
        console.log("Context. Index is selected" + index);
    }

    const gameContext: GameContextType = {
        game: game,
        resetGame: resetGameHandler,
        selectPit: selectPitHandler
    }

    return (
        <GameContext.Provider value={gameContext}>
            {props.children}
        </GameContext.Provider>
    );
}

export default GameProvider;

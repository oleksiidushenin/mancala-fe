import GameContext, {GameContextType} from "./game-context";
import React, {useState} from "react";
import Game from "../domain/Game";
import {createGame, selectPit} from "../domain/GameService"

const GameProvider = (props: { children: React.ReactNode | null }) => {
    const [game, setGame] = useState<Game>(createGame);

    const resetGameHandler = () => {
        setGame(createGame());
        console.log("Context. Reset Game");
    }

    const selectPitHandler = (index: number) => {
        setGame(prevGame => {
            return selectPit(index, prevGame);
        })
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

import Game from "./Game";

const firstStoreIndex: number = 6;
const secondStoreIndex: number = 13;
const stores: Set<number> = new Set<number>([firstStoreIndex, secondStoreIndex]);

export const createGame = (): Game => {
    const board = new Array(14);
    for (let i = 0; i < 14; i++) {
        if (stores.has(i)) {
            board[i] = 0;
        } else {
            board[i] = 6;
        }
    }
    return new Game(true, board);
}

export const getFirstStoreValue = (game: Game): number => {
    return game.board[firstStoreIndex];
}

export const getSecondStoreValue = (game: Game): number => {
    return game.board[secondStoreIndex];
}

export const getFirstPlayerPits = (game: Game): [number, number][] => {
    let result: [number, number][] = [];
    for (let i = 0; i < firstStoreIndex; i++) {
        result.push([i, game.board[i]]);
    }

    return result
}

export const getSecondPlayerPits = (game: Game): [number, number][] => {
    let result: [number, number][] = [];
    for (let i = firstStoreIndex + 1; i < secondStoreIndex; i++) {
        result.push([i, game.board[i]]);
    }

    return result
}

export const selectPit = (index: number, game: Game): Game => {
    const newGame: Game = {
        firstPlayerTurn: game.firstPlayerTurn,
        board: [...game.board],
        finished: game.finished,
        winner: game.winner
    }

    // todo validation

    const seedCount = newGame.board[index];
    newGame.board[index] = 0;
    let targetPit = index + 1;
    for (let i = 0; i < seedCount; i++) {
        if (targetPit > secondStoreIndex) {
            targetPit = 0;
        }

        newGame.board[targetPit++]++;
    }

    const currentPitIndex = targetPit - 1;
    const activePlayerStoreIndex = getActivePlayerStoreIndex(newGame);

    if (getActivePlayerIndexes(newGame).has(currentPitIndex) && currentPitIndex !== activePlayerStoreIndex && newGame.board[currentPitIndex] === 1) {
        const oppositePitIndex = 12 - currentPitIndex;
        newGame.board[activePlayerStoreIndex] += newGame.board[oppositePitIndex];
        newGame.board[activePlayerStoreIndex] += newGame.board[currentPitIndex];
        newGame.board[oppositePitIndex] = 0;
        newGame.board[currentPitIndex] = 0;
    }

    if (activePlayerStoreIndex !== currentPitIndex) {
        newGame.firstPlayerTurn = !newGame.firstPlayerTurn;
    }

    if (isEnd(newGame)) {
        newGame.finished = true;
        newGame.winner = newGame.board[firstStoreIndex] > newGame.board[secondStoreIndex] ? "First Player" : "Second Player";
        newGame.winner += '. Score: ';
        newGame.winner += newGame.board[firstStoreIndex];
        newGame.winner += ' : ';
        newGame.winner += newGame.board[secondStoreIndex];
    }

    return newGame;
}

const getActivePlayerIndexes = (game: Game): Set<number> => {
    if (game.firstPlayerTurn) {
        return new Set<number>(Array.from({length: 7}, (_, i) => i));
    } else {
        return new Set<number>(Array.from({length: 7}, (_, i) => i + 7));
    }
}

const getActivePlayerStoreIndex = (game: Game): number => {
    if (game.firstPlayerTurn) {
        return firstStoreIndex;
    } else {
        return secondStoreIndex;
    }
}

const isEnd = (game: Game): boolean => {
    return isEndForPlayer(game, 0, firstStoreIndex - 1)
        || isEndForPlayer(game, firstStoreIndex + 1, secondStoreIndex - 1)
}

const isEndForPlayer = (game: Game, startIndex: number, endIndex: number): boolean => {
    for (let i = startIndex; i <= endIndex; i++) {
        if (game.board[i] !== 0) {
            return false;
        }
    }

    return true;
}

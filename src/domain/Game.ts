class Game {

    firstPlayerTurn: boolean;
    board: number[];
    finished: boolean;
    winner: string;

    constructor(firstPlayerTurn: boolean, board: number[]) {
        this.firstPlayerTurn = firstPlayerTurn;
        this.board = board;
        this.finished = false;
        this.winner = "";
    }

}

export default Game;

class Game {
    firstStoreIndex: number = 6;
    secondStoreIndex: number = 13;
    stores: Set<number> = new Set<number>([this.firstStoreIndex, this.secondStoreIndex]);

    firstPlayerTurn: boolean;
    board: number[];

    constructor() {
        this.firstPlayerTurn = true;
        this.board = new Array(14);
        for (let i = 0; i < 14; i++) {
            if (this.stores.has(i)) {
                this.board[i] = 0;
            } else {
                this.board[i] = 6;
            }
        }
        console.log("Game initialized");
    }

    getFirstStoreValue() : number {
        return this.board[this.firstStoreIndex];
    }

    getSecondStoreValue() : number {
        return this.board[this.secondStoreIndex];
    }

    getFirstPlayerPits() : number[] {
        return this.board.slice(0, this.firstStoreIndex);
    }

    getSecondPlayerPits() : number[] {
        return this.board.slice(this.firstStoreIndex + 1, this.secondStoreIndex);
    }

}

export default Game;

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

    getFirstStoreValue(): number {
        return this.board[this.firstStoreIndex];
    }

    getSecondStoreValue(): number {
        return this.board[this.secondStoreIndex];
    }

    getFirstPlayerPits(): [number, number][] {
        let result: [number, number][] = [];
        for (let i = 0; i < this.firstStoreIndex; i++) {
            result.push([i, this.board[i]]);
        }

        return result
    }

    getSecondPlayerPits(): [number, number][] {
        let result: [number, number][] = [];
        for (let i = this.firstStoreIndex + 1; i < this.secondStoreIndex; i++) {
            result.push([i, this.board[i]]);
        }

        return result
    }

}

export default Game;

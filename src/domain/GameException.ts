class GameException {

    hasError: boolean;
    message: string;

    constructor(hasError: boolean, message: string) {
        this.hasError = hasError;
        this.message = message;
    }

}

export default GameException;

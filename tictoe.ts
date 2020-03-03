

class Tictactoe1 {


    computer = 1;
    human = 2;
    turn: number = 0;
    totalturn: number = 0;
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    sizeOfBoard = 9;
}
class WinningPlayer extends Tictactoe1 {
    winner(player: number) {
        let gameWon = null;
        if (this.board[0] === player) {
            if ((this.board[1] === player && this.board[2] === player) || (this.board[3] === player && this.board[6] === player) || (this.board[4] === player && this.board[8] === player)) {
                gameWon = player;
            }
        }
        if (this.board[1] === player) {
            if ((this.board[4] === player && this.board[7] === player) || (this.board[0] === player && this.board[2] === player)) {
                gameWon = player;
            }
        }
        if (this.board[2] === player) {
            if ((this.board[5] === player && this.board[8] === player) || (this.board[0] === player && this.board[1] === player) || (this.board[4] === player && this.board[6] === player)) {
                gameWon = player;
            }
        }
        if (this.board[3] === player) {
            if ((this.board[4] === player && this.board[5] === player) || (this.board[0] === player && this.board[6] === player)) {
                gameWon = player;
            }
        }
        if (this.board[6] === player) {
            if ((this.board[7] === player && this.board[8] === player) || (this.board[0] === player && this.board[3] === player) || (this.board[4] === player && this.board[2] === player)) {
                gameWon = player;
            }
        }
        if (this.totalturn === this.sizeOfBoard) {
            alert("game draw");
            let replayobj = new Replay();
            replayobj.replay();
        }
        return gameWon;
    }
}
class ComputerPlays extends WinningPlayer {
    computerPlayer() {
        while (true) {
            let random = Math.floor(Math.random() * (this.sizeOfBoard - 1)) + 1;
            let randomNumber = random.toString();
            let emptySlots = (document.getElementById(randomNumber) as HTMLElement).innerHTML;
            if (emptySlots === "") {
                var num: number = +randomNumber;
                this.board[num] = this.computer;
                (document.getElementById(randomNumber) as HTMLElement).innerHTML = "X";
                (document.getElementById(randomNumber) as HTMLElement).setAttribute("disabled", "true");
                this.turn = this.human;
                this.totalturn++;
                let win = this.winner(this.computer);
                if (win === this.computer) {
                    alert("winner is computer");
                }
                return true;

            }
        }

    }
}
class WhoseTurn extends WinningPlayer {
    start(id: string) {

        this.turn === this.human;
        this.blockSelected(id, this.human);
        this.turn = this.computer;
        this.totalturn++;
    }

    blockSelected(id: string, player: number) {
        let computerPlayer1 = new ComputerPlays();
        var flag = 0;
        var num: number = +id;
        this.board[num] = player;
        (document.getElementById(id) as HTMLElement).innerText = '0';
        (document.getElementById(id) as HTMLElement).setAttribute("disabled", "true");
        if (this.totalturn === 7) {
            flag = 0;
        }
        let win = this.winner(this.human);
        if (win === this.human) {
            alert("winner is human");
            flag = 1;
        }
        if (flag === 0) {
            computerPlayer1.computerPlayer();
        }
    }



}
class Replay {
    replay() {

        location.reload();
    }
}
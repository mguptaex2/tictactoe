var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tictactoe1 = /** @class */ (function () {
    function Tictactoe1() {
        this.computer = 1;
        this.human = 2;
        this.turn = 0;
        this.totalturn = 0;
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.sizeOfBoard = 9;
    }
    return Tictactoe1;
}());
var WinningPlayer = /** @class */ (function (_super) {
    __extends(WinningPlayer, _super);
    function WinningPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WinningPlayer.prototype.winner = function (player) {
        var gameWon = null;
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
            var replayobj = new Replay();
            replayobj.replay();
        }
        return gameWon;
    };
    return WinningPlayer;
}(Tictactoe1));
var ComputerPlays = /** @class */ (function (_super) {
    __extends(ComputerPlays, _super);
    function ComputerPlays() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComputerPlays.prototype.computerPlayer = function () {
        while (true) {
            var random = Math.floor(Math.random() * (this.sizeOfBoard - 1)) + 1;
            var randomNumber = random.toString();
            var emptySlots = document.getElementById(randomNumber).innerHTML;
            if (emptySlots === "") {
                var num = +randomNumber;
                this.board[num] = this.computer;
                document.getElementById(randomNumber).innerHTML = "X";
                document.getElementById(randomNumber).setAttribute("disabled", "true");
                this.turn = this.human;
                this.totalturn++;
                var win = this.winner(this.computer);
                if (win === this.computer) {
                    alert("winner is computer");
                }
                return true;
            }
        }
    };
    return ComputerPlays;
}(WinningPlayer));
var WhoseTurn = /** @class */ (function (_super) {
    __extends(WhoseTurn, _super);
    function WhoseTurn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WhoseTurn.prototype.start = function (id) {
        this.turn === this.human;
        this.blockSelected(id, this.human);
        this.turn = this.computer;
        this.totalturn++;
    };
    WhoseTurn.prototype.blockSelected = function (id, player) {
        var computerPlayer1 = new ComputerPlays();
        var flag = 0;
        var num = +id;
        this.board[num] = player;
        document.getElementById(id).innerText = '0';
        document.getElementById(id).setAttribute("disabled", "true");
        if (this.totalturn === 7) {
            flag = 0;
        }
        var win = this.winner(this.human);
        if (win === this.human) {
            alert("winner is human");
            flag = 1;
        }
        if (flag === 0) {
            computerPlayer1.computerPlayer();
        }
    };
    return WhoseTurn;
}(WinningPlayer));
var Replay = /** @class */ (function () {
    function Replay() {
    }
    Replay.prototype.replay = function () {
        location.reload();
    };
    return Replay;
}());

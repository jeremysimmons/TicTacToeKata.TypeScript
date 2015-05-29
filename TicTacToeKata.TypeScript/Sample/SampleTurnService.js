// Requirements:
//  * should check if the square is taken and return invalid if it is
//  * if the square is valid, claim it by changing that squares state on the board
//  * if the square is valid, increment the turn and change the whosTurnIsIt to reflect the success.
var SampleTurnService = (function () {
    function SampleTurnService() {
    }
    SampleTurnService.prototype.tryTakeTurn = function (game, attempt) {
        if (game.board[attempt.x][attempt.y] != 0 /* Empty */)
            return 1 /* Invalid */;
        game.board[attempt.x][attempt.y] = game.whosTurnIsIt;
        game.currentTurn++;
        if (game.whosTurnIsIt == 1 /* X */) {
            game.whosTurnIsIt = 2 /* O */;
        }
        else {
            game.whosTurnIsIt = 1 /* X */;
        }
        return 2 /* Valid */;
    };
    return SampleTurnService;
})();
//# sourceMappingURL=SampleTurnService.js.map
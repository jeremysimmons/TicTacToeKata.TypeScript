var TurnServiceTests = (function () {
    function TurnServiceTests(turnService) {
        describe('TurnService', function () {
            var game;
            var turnResult;
            beforeEach(function () {
                game = new Game();
                turnResult = 0 /* NotSet */;
            });
            function validMove(scenarioName, gameSetup, attempt) {
                describe(scenarioName, function () {
                    var turnNumberAtStart;
                    var whosTurnIsItAtStart;
                    beforeEach(function () {
                        gameSetup(game);
                        turnNumberAtStart = game.currentTurn;
                        whosTurnIsItAtStart = game.whosTurnIsIt;
                        turnResult = turnService.tryTakeTurn(game, attempt);
                    });
                    it('is a valid move', function () {
                        expect(turnResult).toBe(2 /* Valid */);
                    });
                    it('increases the turn', function () {
                        expect(game.currentTurn).toBe(turnNumberAtStart + 1);
                    });
                    it('adds the marker to the board at the correct square', function () {
                        expect(game.board[attempt.x][attempt.y]).toBe(whosTurnIsItAtStart);
                    });
                    it('changes the turn', function () {
                        expect(game.whosTurnIsIt).not.toBe(whosTurnIsItAtStart);
                        expect(game.whosTurnIsIt).not.toBe(0 /* Empty */);
                    });
                });
            }
            function invalidMove(scenarioName, gameSetup, attempt) {
                describe(scenarioName, function () {
                    var turnNumberAtStart;
                    var whosTurnIsItAtStart;
                    beforeEach(function () {
                        gameSetup(game);
                        turnNumberAtStart = game.currentTurn;
                        whosTurnIsItAtStart = game.whosTurnIsIt;
                        turnResult = turnService.tryTakeTurn(game, attempt);
                    });
                    it('does not change the turn', function () {
                        expect(game.currentTurn).toBe(turnNumberAtStart);
                    });
                    it('is not a valid move', function () {
                        expect(turnResult).toBe(1 /* Invalid */);
                    });
                    it('done not change whom\'s turn it is', function () {
                        expect(game.whosTurnIsIt).toBe(whosTurnIsItAtStart);
                    });
                });
            }
            validMove('first move', function (g) {
            }, new TurnAttempt(0, 0));
            validMove('second turn picking empty space', function (g) {
                g.board[0][0] = 1 /* X */;
                g.currentTurn = 2;
                g.whoGoesFirst = 1 /* X */;
                g.whosTurnIsIt = 2 /* O */;
            }, new TurnAttempt(0, 1));
            validMove('winning move', function (g) {
                g.board[0][0] = 1 /* X */;
                g.board[0][1] = 2 /* O */;
                g.board[1][1] = 1 /* X */;
                g.board[0][2] = 2 /* O */;
                g.whoGoesFirst = 1 /* X */;
                g.currentTurn = 5;
                g.whosTurnIsIt = 1 /* X */;
            }, new TurnAttempt(2, 2));
            invalidMove('second turn space taken', function (g) {
                g.board[2][2] = 1 /* X */;
                g.whoGoesFirst = 1 /* X */;
                g.currentTurn = 2;
                g.whosTurnIsIt = 2 /* O */;
            }, new TurnAttempt(2, 2));
            invalidMove('thrid turn space taken', function (g) {
                g.board[2][2] = 1 /* X */;
                g.board[0][0] = 2 /* O */;
                g.whoGoesFirst = 1 /* X */;
                g.currentTurn = 3;
                g.whosTurnIsIt = 1 /* X */;
            }, new TurnAttempt(0, 0));
        });
    }
    return TurnServiceTests;
})();
//# sourceMappingURL=TurnServiceTests.js.map
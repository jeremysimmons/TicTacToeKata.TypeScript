var GameCtrlState = (function () {
    function GameCtrlState() {
        this.currentGame = new Game();
        this.previousGames = [];
        this.currentGameResult = new GameResult(false, false, 0 /* Empty */);
        this.currentTurnResult = 0 /* NotSet */;
    }
    return GameCtrlState;
})();
// ReSharper disable once InconsistentNaming
function GameCtrl($scope, turnService, gameResultService) {
    $scope.gameState = new GameCtrlState();
    $scope.takeTurn = function (x, y) {
        $scope.gameState.currentTurnResult = turnService.tryTakeTurn($scope.gameState.currentGame, { x: x, y: y });
        console.log(TurnResult[$scope.gameState.currentTurnResult], $scope.gameState.currentGame);
        $scope.gameState.currentGameResult = gameResultService.checkResult($scope.gameState.currentGame);
        console.log($scope.gameState.currentGameResult, $scope.gameState.currentGame);
    };
    $scope.resetGame = function () {
        $scope.gameState.previousGames.push($scope.gameState.currentGame);
        $scope.gameState.currentGame = new Game();
        $scope.gameState.currentGameResult = new GameResult(false, false, 0 /* Empty */);
        $scope.gameState.currentTurnResult = 2 /* Valid */;
    };
}
//# sourceMappingURL=GameCtrl.js.map
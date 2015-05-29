function TurnResultFilter() {
    return function (input) {
        return input == 0 /* NotSet */ ? '' : TurnResult[input];
    };
}
//# sourceMappingURL=TurnResultFilter.js.map
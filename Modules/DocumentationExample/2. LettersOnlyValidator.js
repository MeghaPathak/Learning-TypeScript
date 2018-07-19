"use strict";
exports.__esModule = true;
//2. Defined a Regex
var lettersRegexp = /^[A-Za-z]+$/;
//3. Make letter specific Implementation
var LettersOnlyValidator = /** @class */ (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidator;
}());
exports.LettersOnlyValidator = LettersOnlyValidator;

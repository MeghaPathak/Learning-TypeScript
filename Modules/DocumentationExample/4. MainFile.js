"use strict";
//Import all kinds of validators here
exports.__esModule = true;
var _2__LettersOnlyValidator_1 = require("./2. LettersOnlyValidator");
//some test array
var arr;
// I just instantiated a class defined in LettersOnlyValidator file and called a function
var p = new _2__LettersOnlyValidator_1.LettersOnlyValidator();
p.isAcceptable(arr[0]);
//like this you can repeat for interface as well

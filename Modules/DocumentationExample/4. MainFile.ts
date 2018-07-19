//Import all kinds of validators here

import { StringValidator } from "./1. Validation";
import { ZipCodeValidator } from "./3. ZipCodeValidator";
import { LettersOnlyValidator } from "./2. LettersOnlyValidator";

//some test array
let arr: ["abc124","123456","Megha"];

// I just instantiated a class defined in LettersOnlyValidator file and called a function
let p = new LettersOnlyValidator();
p.isAcceptable(arr[0])

//like this you can repeat for interface as well

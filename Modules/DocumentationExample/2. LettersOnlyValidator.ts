//1. Imported Validation.ts
import {StringValidator} from "./1. Validation" 

//2. Defined a Regex
const lettersRegexp = /^[A-Za-z]+$/;

//3. Make letter specific Implementation
export class LettersOnlyValidator implements StringValidator{
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}
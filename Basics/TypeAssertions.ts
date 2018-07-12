/**
 * Type assertions
 *  - Similar to type casting in Java
 */

//Type assertions have two forms. One is the “angle-bracket” syntax:

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

//And the other is the as-syntax:

let someValue2: any = "this is a string";

let strLength2: number = (someValue as string).length;

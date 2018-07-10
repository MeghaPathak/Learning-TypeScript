/**
 * TypeScript 1.4 gives programs the ability to combine one or two types.
 * Two or more data types are combined using the pipe symbol (|) to denote a Union Type.
 * In other words, a union type is written as a sequence of types separated by vertical bars.
 */


var val: string | number = "Hello";

val = true // <-- Error since string and number were allowed. And you used boolean

//Also possible to include it as function params
function disp(name:string|string[]) { }  

//Union Type and Arrays : Arrays's types can also be combined using this.
var arr:number[]|string[];
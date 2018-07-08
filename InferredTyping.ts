/*TypeScript encourages declaring a variable without a type. In such cases, 
the compiler will determine the type of the variable on the basis of the value assigned to it. 
TypeScript will find the first usage of the variable within the code, determine the type to which it has been initially set
and then assume the same type for this variable in the rest of your code block.*/

/* The last line is important */

var num = 1;   //<-- Compiler infers it as number
//some code
num = "12";    //<--- error: Type not assignable to number
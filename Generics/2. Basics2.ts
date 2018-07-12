/**
 * 
 * Working with Generic Type Variables
 *  When you begin to use generics, you’ll notice that when you create generic functions,
 *  the compiler will enforce that you use any generically typed parameters in the body of the function correctly.
 *  That is, that you actually treat these parameters as if they could be any and all types.
 */

 // This throws an error :
 
 function greet2<T> (param1:T):T {
    if(param1 === true) // <-- Error: operator === can not be applied to T and boolean
    if(param1.length)  //<-- Error: property length does not exits on Type T
    return;
}


function greetArrays <T> (arr : T[]) : T[] {
    alert(arr.length); //<-- See this does not give an error. Because it's an array , So .length function will exists.
    return;
}


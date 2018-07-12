
// This is how a function is written in general
function greet(param1:number):void{

}

function greet2<T> (param1:T):T {
    alert(param1)
    if(param1)
    return;
}


// How to call?

/**
 * The first way is to pass all of the arguments, including the type argument, to the function:
 */
greet2<string>("Hello");

/**
 *The second way is also perhaps the most common. Here we use type argument inference – 
that is, we want the compiler to set the value of T for us automatically based on the type of the argument we pass in: 
 */

greet2("Hello");   
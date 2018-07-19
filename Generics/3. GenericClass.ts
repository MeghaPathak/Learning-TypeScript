/**
 * Generic Class declaration
 * 1. Generic classes are only generic over their instance side rather than their static side, so when working with classes,
 * static members can not use the class’s type parameter.
 */

class Person <T>{
    age:T
    greet:(x:T) => T
}

let a = new Person<number>();
a.greet("heelo")   //<-- Error since Generic declaration on line 6 says it as number.
a.greet(4);
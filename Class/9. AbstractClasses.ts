/**
 * Same Abstract class rules like in JAVA
 * 1. if any method is abstract, the class has to be abstract.
 * 2.They may not be instantiated directly. It's okay to create referencess
 * 3. A class needs to extend and override all its abstract methods.
 * 
 */

abstract class Person{ 
    name: string;
    abstract greet: ()=>{};
}


class Employee extends Person {   //<-- An error is thrown since abstract method greet is not implemented.
}

class Employee2 extends Person{
    greet:()=>{};
}

let p : Person;   //<-- No error. Okay to create references.
p = new Employee();   //<-- can hold reference of child class
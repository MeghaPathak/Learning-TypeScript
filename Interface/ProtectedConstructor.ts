/**
 * 
 * A constructor may also be marked protected. 
 * This means that the class cannot be instantiated outside of its containing class, but can be extended.
 */

class Person {
    public name: string
    protected constructor(name:string) {
        this.name = name;
     }
}

let p = new Person()  //<-- Throws an error


/**
 * But when this class is extended by another class, you can call and use the constructor.
 */

class Employee extends Person{
 constructor(name:string){
     super(name);
 }
 greet = function (){
     alert( this.name)
 }
}

let emp = new Employee("Megha");
emp.greet();
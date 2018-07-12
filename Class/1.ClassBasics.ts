/**
 * I created a class Person to show basic operations.
 * A class definition can include the following −
    Fields − A field is any variable declared in a class. Fields represent data pertaining to objects
    Constructors − Responsible for allocating memory for the objects of the class
    Functions − Functions represent actions an object can take. They are also at times referred to as methods.
 * Use 'this' to have current object's context
 */

class Person { 
    name: string; //fields
    constructor(name: string) { //constructor 
        this.name = name;
    };
    greet(): void {  //function
        alert("Hello" + this.name);
    }
}

var p = new Person("Megha");
p.greet();
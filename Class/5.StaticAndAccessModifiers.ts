/**
 * The static keyword can be applied to the data members of a class. 
 * Static members are referenced by the class name.
 * Access modifiers are : public, private, protected
 */

class Person { 
    static count: number
    age: number
    static greet(): void { }
    greet2() : void {}
}

var p = new Person();
p.count   //<-- Error. Java allowed access but threw a warning. TS does not allow access of static members with  object
Person.count //Valid
Person.greet() //Valid


//Access modifiers
class Person2 { 
    age:number;
    private name:string; 
 }
  
 var obj = new Person2() 
 console.log(obj.age)     //accessible 
 console.log(obj.name)   //<--- compilation Error as name is private
/**
 * IT is very confusing. And honestly, I don't understand why it's even needed in first place.
 * 
 */

class Person { 
    private salary: number
    protected age: number
    public name: string
    private privateGreet: () => {
   //     alert("Hello private");
    }

    public publicGreet: () => {
     //   alert( "Hello public")
    }
}

interface someInterface extends Person {  
}

class Employee implements someInterface{ }

class Student extends Person implements someInterface{ }

let emp = new Employee();
emp.

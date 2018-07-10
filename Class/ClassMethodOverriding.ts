/**
 * Method overiding is same as how it is JAVA. 
 * 1. You can not  change the return type/param type. Eror is thrown.
 * 2. Constructor can not be overridden/.
 * 3. Child can access parents method but not vice versa.
 *  */

class Person { 
    name: string;
    constructor(name: string) { 
        this.name = name;
    };
    greet(): void { 
        alert("Hello Person" + this.name);
    }
    greet2():void{}
    
}

class Employee extends Person { 
    id: string;
    constructor(id: string) { 
        super("Megha");
        this.id = id;
    }
    greet(): void{      //<-- change void to string and error will be thrown.
                        // Since method is overridden. You must keep thw signature same 
        alert("Hello Employee" + this.name + " Id is " + this.id);
    }
    greet3():void{}
}


var p = new Employee("i321255");
p.greet(); //<-- //Hello EmployeeMegha Id is i321255

var q = new Person("Megha")
q.greet();   //<--- Hello PersonMegha
q.greet3() //<--- Error: Parent can access child's methods.

var r = new Employee("i321252");
r.greet2();    // Child can access Parent's method


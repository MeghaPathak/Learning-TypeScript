/**
 * This is to demonstrate inheritance in TS class.
 */

class Person { 
    name: string;
    constructor(name: string) { 
        this.name = name;
    };
    greet(): void { 
        alert("Hello" + this.name);
    }
}

class Employee extends Person { 
    id: string;
    constructor(id: string) { 
        super(id);  
        /* If you're defining constructor in derived class, you need to explicitly call super class's construcotr.
        *You can have as many code lines you want. But if any of those code line try to access the Context (this),
        then error is thrown to first call super.
        this.id = id;
        */
    }
    printId(): void {
        alert("Id is" + this.id);
    }
}


let p = new Employee("Megha");
let q:Person = new Employee("Megha")  // <-- Dynamic binding

p.greet();
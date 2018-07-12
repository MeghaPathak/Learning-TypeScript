/*I have made an Interface Person.
I have declared variables and functions
There are 3 greet function variant.
 -  greet : takes x <any> as params, returns a string
 - greet2 : takes x <number> as params, returns a string
 - greet3 : takes x <number or boolean> as params, returns a string or a boolean
*/

//Obj is an object that implements the interface person and provides implementation of all functions defined in Interface.

/* Corresponding generated JS code :
var obj;
obj.age = 4;
obj.name = "ABC";

Please note that  : No JS code is genrated for the construct interface. Interface is purely TS specific only
*/

interface Person { 
    age: number,
    name: string,
    greet: (x) => string,
    greet2: (x: number) => string,
    greet3: (x: number|boolean) => boolean|string    
}

var obj: Person = {
    age : 4,
    name :"ABC",
    greet: (x) => { return "Hello" + x },
    greet2: (x) => { return "Hello" + x },
    greet3: (x) => {
        if (typeof x === "string") {
            alert("It's a string")
            return "Just returning some string"
        }
        else { 
            alert("It's boolean");
            return true
        }
            
    }
};

alert(obj.greet("Megha"))
alert(obj.greet3(true));

//This throws an error because you have not completely implemented interface methods
var obj2 : Person = {
    age : 4,
    name :"ABC",
    greet: (x) => { return "Hello" + x }
}


function doSomething(p:Person){   //<-- you can also pass interface's object like this

}
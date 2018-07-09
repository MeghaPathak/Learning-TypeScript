interface Person { 
    age: number,
    name: string,
    greet:() => string   //<-- weird syntax h thoda
}


var obj: Person = {
    age : 4,
    name :"ABC",
    greet : () => {return "Hello"}
};


/* Corresponding JS
var obj;
obj.age = 4;
obj.name = "ABC";
*/


/*
1. No JS code is genrated for the construct interface. Interface is purely TS specific only
* 

*/

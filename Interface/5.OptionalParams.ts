/**
 * Not all properties of an interface may be required. 
 * Some exist under certain conditions or may not be there at all. 
 * You can declare them as optional
 */


interface Person{
    age: number,
    contact?: string,
    requiredGreet : ()=>string
    optionalGreet?:()=>string
}

let obj : Person = {
    age : 4,
    requiredGreet : ()=>{ return "Hello"}   //<-- note that no error was thrown when you did not include contact, optional greet
}

/**
 *  Aliases is a way to call a type with a name of your choice. 
 */

//Example 1 : String 

type Name = string;

function greet(p: Name) {
    if (typeof p === "string") {
        alert("Name is a type alias for string")
    }
    else { 
        alert("Name is NOT a type alias for string")
    }
}
greet("Megha");


//Example 2: Funciton and string
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}


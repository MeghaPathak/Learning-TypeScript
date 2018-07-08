/* Lamba Expressions*/

var foo = (x: string) => { 
    alert(x) 
}
foo("Megha") //Alerts Megha

/*
1. For all functions in TS the parameter type is optional
2. In Lambda, if the params is single the parantheses is optional

Hence,
all the below examples are Valid.
*/

var foo2 = () => { alert("Empty Params") }
foo2();

var foo3 = x => {alert("Single Params, no brackets" + x)}
foo3(4);
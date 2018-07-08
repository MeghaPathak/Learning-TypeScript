var s:string = "Mary"

//Type Assertion
var s2:number = <number> <any> s;
 // The value stored in s2 is number. By introducing <>, we convert the type of the value to number. AND not type of the variable. 
 // This does not mean s is converted to number.
 //because this statement gives an error s2=s <--- syaing uncompatible types aisa

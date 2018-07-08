/* How to wrtite functions in TS 
1. Normal function
2. Optional Params
3. Rest params (varargs)
*/

function printDetails(name:string, id:number){
    alert(name + id);
}

printDetails("Megha", 23);  //<-- Prints Megha23 

printDetails("Megha", "23");  //<-- I tried to change the type. It gives an assigning error 


function OptionalParams (name:string, id:number, mailid?:string){
/* 
- If no value is passed, undefined is assumed
- Declaring a value as optional makes it easy/intuitive for us to check for a 
 possible undefined value for that variable. 
 */
}

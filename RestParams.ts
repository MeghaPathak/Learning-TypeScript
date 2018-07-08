

//Rest Parameters
/*Rest parameters don’t restrict the number of values that you can pass to a function. 
However, the values passed must all be of the same type */
function varArgs(...array: number[]) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) { 
            sum = sum + array[i]
    }
    alert(sum);
}

 varArgs(1,2,3,4);  //<-- outputs 10


 function varArgs2(...array: number[], dummy2:string) {}   // Throws an error. Rest params should be the last params in the function

 function varArgs3( dummy2:string, dummy3:string, ...array: number[]) {} // Valid. You can have >=1 params before rest. But not after it
 //Also the calling should be such that the parameter happens exactly.

//  a function can have at the most one rest parameter.
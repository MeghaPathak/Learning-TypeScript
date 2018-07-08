/*Function Overloading*/

/*
1. The signature should be diffewrent.
2. Since TS provides optional params functionality, it's easier to visualize overloading.
3. The weird part is  : The declaration must be followed by the function definition. 
The parameter types should be set to any if the parameter types differ during overload
*/

function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 

function disp(x:any,y?:any):void { 
   console.log(x); 
   console.log(y); 
} 
disp("abc") 
disp(1,"xyz");

// TODO : Not convining explanation. Please explore.
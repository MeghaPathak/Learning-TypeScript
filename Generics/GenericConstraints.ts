/**
 * Refer Basics2.ts  : See how on line 13, there is an error because we wanted to be able to access the .length property of arg, 
 * but the compiler could not prove that every type had a .length property, so it warns us that we can’t make this assumption.
 * 
 * we’d like to constrain this function to work with any and all types that also have the .length property. 
 * To do so, we must list our requirement as a constraint on what T can be.
 * 
 * To do so, we’ll create an interface that describes our constraint. 
 * Here, we’ll create an interface that has a single .length property and then 
 * we’ll use this interface and the extends keyword to denote our constraint:
 */


interface IhaveLengthParams { 
    length:number
}

function foo<T>(arg: IhaveLengthParams) {
    if (arg.length) {   //<-- No error is thrown
        //blah blah
    }    
 }

 foo(3) //<-- error. 3 is not of type IhaveLengthParams
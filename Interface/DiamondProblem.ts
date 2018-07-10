/**
 * I tried to create Diamond Problem scenario but I can not see any error.
 * As of now I doin't know thje property v1 in obj is coming from which parent? 
 * 
 * Answer : Similar to JAVA, here also, multiple interfaces can be extended. It does not matter as you are not giving function definition

 */

interface IParent1 { 
    v1:number
 } 
 
 interface IParent2 extends IParent1{ 
    v1:number 
 } 

 interface IParent3 extends IParent1 { 
    v1:number 
} 
 
interface Child extends IParent2, IParent3 {
 } 

var Iobj: Child = {
    v1 : 5
} 

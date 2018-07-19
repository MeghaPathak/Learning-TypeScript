/**
 *  We have covered Null types before. This is some just information
 */

 /*
 1.  the type checker considers null and undefined assignable to anything. 
 Effectively, null and undefined are valid values of every type. 
 That means it’s not possible to stop them from being assigned to any type, even when you would like to prevent it. 
 The inventor of null, Tony Hoare, calls this his “billion dollar mistake”.
*/

/*
 2. The --strictNullChecks flag fixes this: when you declare a variable, it doesn’t automatically include null or undefined. 
 You can include them explicitly using a union type: 
*/

 let s1 = "foo";
 s1 = null; // error, 'null' is not assignable to 'string'

 let s2: string | null = "bar";
 s2 = null; // ok
 
 s2 = undefined; // error, 'undefined' is not assignable to 'string | null'

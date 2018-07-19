/**
 * A union type describes a value that can be one of several types. 
 * We use the vertical bar (|) to separate each type,
 *  so number | string | boolean is the type of a value that can be a number, a string, or a boolean.

  IMPORTANT : If we have a value that has a union type, we can only access members 
  that are common to all types in the union
 */


interface SoftwareDeveloper {
    code();
    develop();
}

interface QA {
    code();
    test();
}

function getRole () : SoftwareDeveloper|QA { 
    return;
}

let role = getRole();
role.code();
role.test() //<-- Error : Union means you can use only those functions/properties that are common to both



//ALSO NOTE THAT : This problem can be solved by Type assetrion
(<QA>roles).test()  //<--- No error
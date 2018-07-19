/**
 * In Union types : What happens when we need to know specifically whether we have a particular type?
 * 
 * TypeScript has something called a type guard. 
 * A type guard is some expression that performs a runtime check that guarantees the type in some scope. 
 * 
 * To define a type guard, we simply need to define a function whose return type is a type predicate:
 */
interface Developer {
    code();
    develop();
}

interface QA {
    code();
    test();
}

function getRole () : Developer|QA { 
    return;
}

//TypeGuard function

/*person is QA is our type predicate in this example. A predicate takes the form parameterName is Type, 
where parameterName must be the name of a parameter from the current function signature.
*/

function isQA (role : Developer|QA) : role is QA {
    return (<QA>role).test !== undefined;
}

let person = getRole();
alert(isQA(person))  // <--- Some issue with the code. But this should work.
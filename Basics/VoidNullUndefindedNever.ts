/**
 * 1. void is a little like the opposite of any: the absence of having any type at all.
 * 2. In TypeScript, both undefined and null actually have their own types named undefined and null respectively. 
 *   By default null and undefined are subtypes of all other types. That means you can assign null and undefined to number etc.
 * 3. The 'never' type represents the type of values that never occur. For instance, never is the return type for a function expression 
 *   or an arrow function expression that always throws an exception or one that never returns.
 */

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}
/**
 * This is to demonstrate Diamond Problem in TS.
 * TS does not support multiple inheritance, hence diamond problem does not exists.
 */

class Person { 
}

class Person2 { 
}

class Employee extends Person, Person2 {   //<-- Throws an error : Classes can only extend a single class
}


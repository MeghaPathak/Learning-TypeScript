/**
 * TypeScript supports getters/setters as a way of intercepting accesses to a member of an object. 
 * The get,set in TS generates a coreesponding Object.define property code in JS. 
 * Please look at the JS Code too.
 */


class Person{ 
    name: string;
    get MyName(): string{
        return this.name;
    }
    set MyName(name: string) {
        this.name = name;
     }
}

let p = new Person();
p.MyName   //<--- You can set and get value easily

/*********** JS Generated Code *********************/

var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "MyName", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var p = new Person();
p.MyName;

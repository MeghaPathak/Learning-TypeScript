/** FOR-OF : Iterates over an iterable object, invoking the Symbol.iterator property on the object
 */

/* 
 * 2. for..in returns a list of keys on the object being iterated, 
 * whereas for..of returns a list of values of the numeric properties of the object being iterated
 * Ex :
*/
let list = [4, 5, 6];

for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}

/*3. Another distinction is that for..in operates on any object; It is used to inspect properties on this object.

for..of on the other hand, is mainly interested in values of iterable objects.
Built-in objects like Map and Set implement Symbol.iterator property allowing access to stored values.
*/
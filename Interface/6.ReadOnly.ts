/**
 * Some properties should only be modifiable when an object is first created. 
 * Use readonly before the name of the property:
 */

interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = {
    x:4,
    y:5
}
p1.x = 10 // <--- Error : Can't change value because it is a read only.

/*TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T> with all mutating methods removed
*, so you can make sure you don’t change your arrays after creation
*/

let o : ReadonlyArray<number> = [1,2,3];
o[0] = 10   //<--- Error.
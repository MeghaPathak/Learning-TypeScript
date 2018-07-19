/**
 * Optional parameters and properties

 With --strictNullChecks, an optional parameter automatically adds | undefined:
*/

function greetz(x: number, y?: string) {
    return ;
}
greetz(1, "Hello");
greetz(1);
greetz(1, undefined);
greetz(1, null); // error, 'null' is not assignable to 'number | undefined'
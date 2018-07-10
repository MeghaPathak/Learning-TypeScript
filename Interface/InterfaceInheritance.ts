/**
 * Two interfaces Person and Employee. MeghaObj is an object who is both Person and Employee.
 */

interface Person{
    age:number,
    name:string
}

interface Employee extends Person{
    id : string,
    employeeDetails : () => string
}

var MeghaObj : Employee = {
    age : 3,
    name: "Megha",
    id : "i321255",
    employeeDetails : () => {
        return "SomeDetails"
    }
}

alert(MeghaObj.employeeDetails());
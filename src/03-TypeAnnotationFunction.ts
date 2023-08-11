/*
    Type Annotations With Functions

    - noImplicitAny

    - noImplicitReturns
    --- Will Check All Code Paths In A Function To Ensure They Return A Value

    - noUnusedLocals
    --- Report Errors On Unused Local Variables

    - noUnusedParameters
    --- Report Errors On Unused Parameters In Functions.
*/

let toShow = true 

function showDetails(name: string, age: number, salary: number) :string{
  let test = 10;
  if (toShow)
    return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test} `
  return `No Data`
}

interface Person{
  de(): string;
};

abstract class Test{
  te(): string{
     return ``
   };
}

class Employ extends Test implements Person  {
  de(): string {
    return `Test`
  };
  name(): string {
    return ``
  }
}
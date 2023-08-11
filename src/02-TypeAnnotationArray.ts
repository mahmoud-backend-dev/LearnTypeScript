let allVar: string | number | boolean = "h";

all = "A";
all = 20.2;
all = false;

// let friends: (string | number)[] = ["a", "b", "c", 5];
let friends: string[] = ["a", "b", "c"];

for (let index = 0; index < friends.length; index++) {
    console.log(friends[index].repeat(5))
} 

/* 
    Type Annotation With multidimensional Arrays
*/

let arrayOne: number[] = [1, 2, 3, 4];
let arrayTwo: string[] = ["a", "b", "c"];
let arrayThree: (string | number)[] = [1, 2, 3, 4, "a", "b"];
let arrayFour: (string | number | boolean | string[])[] = [1, 2, 3, 4, "a", "b", true, false, ["a", "b"]];
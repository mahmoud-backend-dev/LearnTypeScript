/*
  Generics
  - Help Write A Reusable Code
  - Allow To Pass Type As A Parameter To Another Type
  - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
  - We Can Create:
  --- Generic Classes
  --- Generic Functions
  --- Generic Methods
  --- Generic Interfaces
*/

function returnType<T>(val: T): T{
  return val;
}

console.log(returnType<number>(100));
console.log(returnType<number[]>([100, 200, 50]));
console.log(returnType<string>("100"));
console.log(returnType<boolean>(true));
console.log(returnType<boolean[]>([true, false, true]));


// Multiple Types
const multipleTypes = <T, S>(oneValue: T, twoValue: S): string => {
  return `The First Value Is ${oneValue} And The Second Value ${twoValue}`;
};

console.log(multipleTypes<string, number>("Hamdi", 200));
console.log(multipleTypes<number,boolean>(200,false));
console.log(multipleTypes<number[], boolean[]>([200, 500], [false, true]));


// Classes And Interfaces
interface Book{
  itemType: string;
  title: string;
  isbn: number;
};

interface Game{
  itemType: string;
  title: string;
  style: string;
  price: number;
};

class Collection<T>{
  public data: T[] = [];
  add(item: T): void{
    this.data.push(item);
  }
};

let itemOne = new Collection<Book>();
itemOne.add({ itemType: "Book", title: "title", isbn: 15205 });
itemOne.add({ itemType: "Book", title: "title 2", isbn: 88995 });
console.log(itemOne);

let itemTwo = new Collection<Game>();
itemTwo.add({ itemType: "Book", title: "title", price: 200, style: "Style 1" });
itemTwo.add({ itemType: "Book", title: "title 2", price: 200, style: "Style 1" });
console.log(itemTwo);


let myObject: {
  readonly userName: string,
  id: number,
  hire?: boolean,
  skills: {
    one: string,
    two: string
  }
} = {
  userName: "Mahmoud",
  id: 100,
  hire: true,
  skills: {
    one: "JS",
    two: "Python"
  }
};

// myObject.userName = "Hamdi"; Error, Because proprity userName is readonly
myObject.hire = false;

console.log(myObject.userName);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills);
console.log(myObject.skills.two);

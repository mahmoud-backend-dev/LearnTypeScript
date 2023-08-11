/*
  Class
  - Data Access Modifiers & Parameters Properties
  --- Public
  ------ All Members Of A Class In TypeScript Are Public
  ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
  --- Private
  ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
  --- Protected
  ------ Same Like Private But Can Be Accessed Using The Deriving Class

  - TypeScript Is A Layer On Top Of JavaScript
  - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
*/

class UserClass {
  // u: string;
  // s: number;
  private static created: number = 0;
  public static getCount(): void{
    console.log(`${this.created} Object Created`);
  }
  msg:()=>string;
  constructor(private _userName: string, public readonly salary: number, protected address: string) {
    // this.u = _userName;
    // this.s = salary;
    UserClass.created++;
    this.msg=()=>{
      // return `Hello ${this.u} Your Salary Is ${this.s}`;
      return `Hello ${this._userName} Your Salary Is ${this._userName} Your Address ${this.address}`;
    }
  };
  sayHello():string {
    // return `Hello ${this.u} Your Salary Is ${this.s}`;
    return `Hello ${this._userName} Your Salary Is ${this._userName} Your Address ${this.address}`;
  };
  get userName(): string{
    return this._userName;
  };
  set userName(value: string) {
    this._userName = value;
  }
};

let userOne = new UserClass("Mahmoud", 5000, "sa");
let userTwo = new UserClass("Mahmoud", 5000, "sa");
let userThree = new UserClass("Mahmoud", 5000, "sa");
UserClass.getCount();

console.log(userOne.msg());
userOne.userName = "hass";
console.log(userOne.msg());


// Class implemnts interface
interface Setting{
  theme: boolean;
  font: string;
  save(): void;
};

class Imp implements Setting{
  constructor(public theme: boolean, public font: string){ }
  save(): void {
    console.log("Saved");
  };
  update(): void{
    console.log("Updated");
  }
};

let imp1 = new Imp(true, "fsas");

imp1.save();
imp1.update()
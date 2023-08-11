/*
  Class
  - Polymorphism & Method Override

  - Polymorphism
  --- Classes Have The Same Methods But Different Implementations

  - Method Override
  --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
  --- A Method In Child Class Must Have Same Name As Parent Class

  --- noImplicitOverride
*/

class Player{
  constructor(public name: string) { }
  attack(): void {
    console.log(`Attacking Now`);
  }
};

class Amazon extends Player{
  // constructor( public override name: string, public spears: number) {
  constructor(name: string, public spears: number) {
    super(name)
  };
  override attack(): void {
    super.attack();
    console.log('Attacking With Spears');
    this.spears--;
  }
};

class Barbarian extends Player{
  constructor(name: string, public axeDurability: number) {
    super(name)
  };
  override attack(): void {
    super.attack();
    console.log("Attacking With Axe");
    this.axeDurability -= 1;
  }
};

let amz1 = new Amazon("Mahmoud", 100);
let barOne = new Barbarian("Ahmed", 81);

console.log(amz1.name);
amz1.attack();
console.log(amz1.spears);
console.log(barOne.name);
barOne.attack();
console.log(barOne.axeDurability);

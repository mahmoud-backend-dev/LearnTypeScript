abstract class Food{
  constructor(public title: string) { };
  abstract getCookingTime(): void;
  foodName(): void{
    console.log(`Food`);
  }
};

class Pizza extends Food{
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime(): void {
    console.log(`Abstract Methods, Cooking Time For Pizza Is 1 Hour`);
  };
  override foodName(): void {
    console.log('Test');
  }
};

let pizza1 = new Pizza("Mar",5000);
pizza1.foodName()
console.log(pizza1.title);
console.log(pizza1.price);
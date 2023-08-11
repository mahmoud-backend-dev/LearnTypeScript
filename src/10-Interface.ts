
interface User {
  id?: number;
  readonly userName: string;
  country: string;
  sayHello(): string;
  sayWelcom: () => string;
  getDouble(num: number): number;
}

let user: User = {
  id: 100,
  userName: "hamdi",
  country: "Egypt",
  sayHello() {
    return `Hello ${this.userName}`;
  },
  sayWelcom: () => {
    return `Welcome ${user.userName}`;
  },
  getDouble: function (n: number) {
    return n * 2;
  }
};

console.log(user);
// user.userName = "Hass"  Cannot assign to 'userName' because it is a read-only property

// const getData = (data: User) => {
//   console.log(`Id Is ${data.id}`);
//   console.log(`User Name Is ${data.userName}`);
//   console.log(`Country Is ${data.country}`);
// }

// getData({  userName: "Mahmoud", country: "Egypt" });

console.log(user.sayHello());
console.log(user.sayWelcom());
console.log(user.getDouble(20));


//  Interface ReOpen

// Home Page
interface Settings{
  readonly theme: boolean,
  font:string,
}

// Article Page 
interface Settings{
  sidebar: boolean
};

// Contact Page 
interface Settings{
  external: boolean
}

let userSetting: Settings = {
  theme: true,
  font: "",
  sidebar: true,
  external:false
}

// Extanding Interfaces

interface User2{
  id: number;
  userName: string;
  country: string;
}

interface Moderator{
  role: string | number;
};

interface Admin extends User2,Moderator{
  protect: boolean;
};

let user2: Admin = {
  id: 5,
  userName: "Mhmoud",
  country: "Eg",
  role: "mod",
  protect: false,
}
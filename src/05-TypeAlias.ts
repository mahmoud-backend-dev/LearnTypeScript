
type st = string;

let Name: st = "sadsad";

Name = "sdasad";
// Name = 200; Error

type stAndNum = st | number;  // string | number

let TestNumAndName: stAndNum = 500;
TestNumAndName = "sasdsdas";
// TestNumAndName = true; Error


// Advanced Type Alias

type Buttons = {
  up: string,
  right: string,
  left: string,
  down: string,
};

type Last = Buttons & {
  x: boolean
}

type A = {
  one: string,
  two: number,
  three: boolean,
};

type B = A & {
  four: number,
};

type C = {
  five: boolean,
};


type mix = A & C;

function getActions(btns: Last) {
  console.log(`Action For Button Up Is ${btns.up}`);
  console.log(`Action For Button Right Is ${btns.right}`);
  console.log(`Action For Button Left Is ${btns.left}`);
  console.log(`Action For Button Down Is ${btns.down}`);
};

function getActionsUinn(btns: mix) {
  console.log(`Action For Button Up Is ${btns.one}`);
  console.log(`Action For Button Right Is ${btns.two}`);
  console.log(`Action For Button Left Is ${btns.three}`);
  console.log(`Action For Button Down Is ${btns.five}`);
};

getActionsUinn({ one: "String", two: 100, three: true, five: true });
getActions({ up: "Go Up", right: "Go Right", left: "Go Left", down: "Go Down", x: true });
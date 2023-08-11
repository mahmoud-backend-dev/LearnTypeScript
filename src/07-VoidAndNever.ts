
// Example Void Function
function logging(msg: string): void {
  console.log(msg);
  return;
}

console.log(logging("Iam A Message"));
console.log("Test");

// Example Never Function
const fail = (msg: string) => {
  throw new Error(msg);
  // return; Unreachable code detected
};

function alwaysLog(name: string): never{
  while (true)
    console.log(name);

  // return; Unreachable code detected
}

alwaysLog("Hamdi");
// console.log(sdasdsa);

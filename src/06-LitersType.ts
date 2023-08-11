
type nums = 0 | 1 | -1;

function compareTwoNumbesr(num1: number, num2: number): nums{
  if (num1 === num2)
    return 0;
  else if (num1 > num2)
    return 1;
  else
    return -1;
};

console.log(compareTwoNumbesr(20, 20));
console.log(compareTwoNumbesr(20, 15));
console.log(compareTwoNumbesr(20, 30));

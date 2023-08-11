
function addRestParamter(...nums: number[]): number{
  let res = 0;
  for (let i = 0; i < nums.length; i++){
    res += nums[i]
  };
  return res;
};

console.log(addRestParamter(10, 20, 30, 40, +true));


const addWithAnonFunc = function (num1: number, num2: number): number {
  return num1 + num2;
};

console.log(addWithAnonFunc(10,20));


const addWithArrowFunc = (num1: number, num2: number): number => num1 + num2;

console.log(addWithArrowFunc(10, 20));

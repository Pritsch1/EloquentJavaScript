/* 
Zero is even. // One is odd.
For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

//with abs
function isEven(n)
{
  let x = Math.abs(n);
  if(x === 0 || x === 1)
  {return x === 0 || false;}
  else
  {
    return isEven(x - 2)
  }
}

//no abs
function isEven(n)
{
  let x = n > 0 ? n : n * -1;
  if(x === 0 || x === 1)
  {return x === 0 || false;}
  else
  {
    return isEven(x - 2)
  }
}

//logs
console.log(isEven(12));
console.log(isEven(-20));
console.log(isEven(7));
console.log(isEven(-11));
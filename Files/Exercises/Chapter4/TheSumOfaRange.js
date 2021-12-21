function range(a, b, step = a < b ? 1 : -1) // This "step = a < b ? 1 : -1" was the only thing I copied from the solution.
{
  let arr = [], cond = a < b ? b + 1 : b - 1;
  for (let i = a; i !== cond; i += step)
  {
    arr = [...arr, i];
  }
  return arr; 
}

function sum(arr)
{
  let result = 0;
  for (let i = 0; i < arr.length; i++)
  {
    result += arr[i];
  }
  return result;
}

console.log(range(1, 10));// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));// → 55
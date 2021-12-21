function reverseArray(arr)
{
  let newArr = [];
  for (let i = 0; i < arr.length; i++)
  {
    //newArr.unshift(arr[i]);
    newArr = [arr[i], ...newArr];
  }
  return newArr;
}

function reverseArrayInPlace(arr)
{
  let cond = arr.length, count = cond - 1;
  for (let i = 0; i < cond; i++)
  {
   arr.push(arr[count]);
   count--;
  }
  for (let i = 0; i < cond; i++)
  {
    arr.shift();
  }
  return arr;
}
console.log(reverseArray(["A", "B", "C"]));// → ["C", "B", "A"]
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);// → [5, 4, 3, 2, 1]
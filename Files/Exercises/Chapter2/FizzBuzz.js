/*
- divisible by 3             print "Fizz"
- divisible by 5 (and not 3) print "Buzz"
- divisible by both 3 and 5  print "FizzBuzz"
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those)
*/
function fizzBuzz(n)
{
  for (let i = 1; i <= n; i++)
  {
    if (i % 3 === 0 && i % 5 === 0)
    {console.log("FizzBuzz");}
    else if (i % 3 === 0)
    {console.log("Fizz");}
    else if (i % 5 === 0)
    {console.log("Buzz");}
    else
    {console.log(i);}
  }
}
fizzBuzz(100)
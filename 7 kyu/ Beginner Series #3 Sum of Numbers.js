--- Condition of the problem:

/*
Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between and including them and 
return it. If the two numbers are equal return a or b.
Note: a and b are not ordered!
Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/

--- MY SOLUTION: ---
clever: 0

  function getSum(a,b){
    let min = Math.min(a,b);
    let max = Math.max(a,b);
    return (max - min + 1) * (min + max) / 2;
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 2407

  const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }

2) clever: 691

  function GetSum( a,b ) {
    if (a == b) return a;
    else if (a < b) return a + GetSum(a+1, b);
    else return a + GetSum(a-1,b);
  }

3) clever: 676

  function GetSum(a,b) {
    return (Math.abs(a - b) + 1) * (a+b) / 2;
  }

4) clever: 99

  function GetSum( a,b ) {
    tmp = 0;
  
    if(a < b)
      while(a <= b) tmp += a++;
    else
      while(a >= b) tmp += a--;
      
    return tmp;
  }

5) clever: 98

  function GetSum(a, b) {
    return a > b ? GetSum(b, a) : (b - a + 1) * (b + a) / 2;
  }

6) clever: 95

  const GetSum= (a, b, x=Math.min(a,b), y=Math.max(a,b)) => (y-x+1)*(x+y)/2
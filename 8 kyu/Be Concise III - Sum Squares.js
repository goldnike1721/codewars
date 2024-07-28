--- Condition of the problem:

/*
Be Concise III - Sum Squares
You are given a program sumSquares that takes an array as input and 
returns the sum of the squares of each item in an array. For example:
sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
sumSquares([7,3,9,6,5]) === 200
sumSquares([11,13,15,18,2]) === 843
Shorten the code such that it meets the requirements.
A few hints:
Try researching about built-in Array methods; they may help shorten your code a lot
Good luck!
*/

--- MY SOLUTION: ---
clever: 0

  function sumSquares(array) {
    return array.map(n => n ** 2).reduce((s, n) => s + n, 0);
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 12

  sumSquares=a=>a.reduce((p,c)=>p+c*c,0)

2) clever: 4

  let sumSquares = a => a.reduce((s, x) => s + x * x, 0)

3) clever: 3

  function sumSquares(array) {
    return array.reduce((a,b) => a + b ** 2, 0);
  }

4) clever: 2

  var sumSquares=a=>a.map(x=>x*x).reduce((x,y)=>x+y);

5) clever: 1

  x=a=>Math.hypot(...a)**2+.1|0
  sumSquares=a=>([].reduce(x,0),x(a))

6) clever: 1

  function sumSquares(array) {
    const _square = n => n * n
    const _sum = (a, b) => a + b
    return array.map(_square).reduce(_sum, 0)
  }
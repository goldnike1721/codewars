--- Condition of the problem:

/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1*2+2*2+2*2=9
*/

--- MY SOLUTION: ---
  clever: 0

  function squareSum(numbers){
    let sum = 0;
    for (let number of numbers) {
      sum += number ** 2;
    }
    return sum;
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 790

  function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }

2) clever: 317

  function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
  }

3) clever: 193

  const squareSum = numbers => numbers.reduce((a, b)=> a + b**2, 0)

4) clever: 81

  function squareSum(numbers){
    var sum = 0;
    numbers.forEach(function(n) {
      sum += n * n
    });
    return sum;
  }

5) clever: 50

  function squareSum(numbers){
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
      result += (numbers[i] * numbers[i]);
    }
    return result;
  }

6) clever: 32

  function squareSum(numbers) {
    return numbers.reduce((s,a)=>s+a*a,0);
  }
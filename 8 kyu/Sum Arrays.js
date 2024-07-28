--- Condition of the problem:

/*
Write a function that takes an array of numbers and returns the sum of 
the numbers. The numbers can be negative or non-integer. If the array does 
not contain any numbers then you should return 0.
Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2
Input: []
Output: 0
Input: [-2.398]
Output: -2.398
Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners 
who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.
*/

--- MY SOLUTION: ---
  clever: 0

  function sum (numbers) {
    let sum = 0;
	for (let number of numbers) {
		sum += number;
	}
	return sum;
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 416

  function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }

2) clever: 82

  sum = function (numbers) {
    "use strict";
    return numbers.reduce(function(t, n){
      return t + n;
    }, 0);
  }

3) clever: 69

  const sum = n => n.reduce((a,b) => a+b, 0);

4) clever: 44

  sum = function (numbers) {
    "use strict";
    var total = 0;
    for(var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }

5) clever: 31

  function sum (numbers) {
    "use strict";
    return numbers.length == 0 ? 0 : numbers.shift() + sum(numbers);
  }

6) clever: 19

  function sum (numbers) {
    if(numbers.length === 0){
      return 0;
    }
    else {
      let sumNumbers = 0;
      for (e of numbers) {
        sumNumbers += e;
      }
      return sumNumbers;
    }    
  }
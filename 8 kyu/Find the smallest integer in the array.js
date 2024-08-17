--- Condition of the problem:

/*
Given an array of integers your solution should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

--- MY SOLUTION: ---
clever: 0

  function findSmallestInt(arr) {
    let min = 100000000;
    for (let x of arr) {
      if (min > x) {
        min = x;
      }
    }
    return min;
  }

  

--- OTHER SOLUTIONS: ---

1) clever: 1277
  
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

2) clever: 250

  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0];
    }
  }

3) clever: 111

  class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort(function(a, b) {
      return a - b; } )
      return args[0];
    }
  }

4) clever: 98

  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min.apply(null, args);
    }
  }
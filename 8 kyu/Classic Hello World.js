--- Condition of the problem:

/*
You are given a method called main, make it print the line Hello World!, 
(yes, that includes a new line character at the end) and don't return anything
Note that for some languages, the function main is the entry point of the program.
Here's how it will be tested:
    Solution.main("parameter1","parameter2");
Hints:
Check your references
Think about the scope of your method
If you still don't get it probably you can define main as an attribute of the Solution class 
that accepts a single argument, and that only prints "Hello World!" without any return.
*/

--- MY SOLUTION: ---
clever: 0

  class Solution {
    constructor() {
      this.parameter1 = 'Hello ';
      this.parameter2 = 'World!';
    }
    getResult() { 
      return this.parameter1 + this.parameter2;
    }
    static main() {
      const solution = new Solution();
      console.log(solution.getResult());
    }
  }
  Solution.main();


  
--- OTHER SOLUTIONS: ---

1) clever: 14

  Solution = {};
  Solution.main = () => { console.log('Hello World!'); };

2) clever: 7

  Solution = {main(){}}
  logRecord.indexOf = _ => 0

3) clever: 6

  class Solution {
    static main() {
      console.log("Hello World!");
    }  
  }
  
4) clever: 5

  let Solution = { main() { 
      console.log("Hello World!");
    } 
  }
  
5) clever: 2

  function Polution() {}

  Polution.prototype.main = function () {
    console.log("Hello World!");
  }

  var Solution = new Polution();
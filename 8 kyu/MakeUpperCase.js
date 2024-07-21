--- Condition of the problem:

/*
Write a function which converts the input string to uppercase.
*/

--- MY SOLUTION: ---
clever: 18

function makeUpperCase(str) {
    return str.toUpperCase();
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 136

  const makeUpperCase = str => str.toUpperCase();

2) clever: 12

  function makeUpperCase(str) {
    return str.toLocaleUpperCase();
  }

3) clever: 10

  function makeUpperCase(str) {
    var res = str.toUpperCase();
    return res;
  }

4) clever: 5

  const makeUpperCase = (s) => s.toUpperCase()
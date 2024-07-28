--- Condition of the problem:

/*
Return the type of the sum of the two arguments
*/

--- MY SOLUTION: ---
clever: 1

  function typeOfSum(a, b) {
    let sum = a + b
    return typeof(sum)
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 45

  const typeOfSum = (a, b) => typeof(a + b);

2) clever: 28

  function typeOfSum(a, b) {
    return typeof(a + b);
  }

3) clever: 4

  function typeOfSum(a, b) {
    if (typeof a === 'string' || a instanceof String){return 'string'}
    if (typeof b === 'string' || b instanceof String){return 'string'}
    return 'number'
  }
  
4) clever: 3

  function typeOfSum(a, b) {
    return typeof a != 'string' && typeof b != 'string' ? 'number' : 'string';
  }
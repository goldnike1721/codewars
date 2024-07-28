--- Condition of the problem:

/*
Implement a function which convert the given boolean value into its string representation.
Note: Only valid inputs will be given.
*/

--- MY SOLUTION: ---
clever: 0

  function booleanToString(bool) {
    return bool.toString();
   }


  
--- OTHER SOLUTIONS: ---

1) clever: 820

  function booleanToString(b) {
    return `${b}`
  }

2) clever: 794

  function booleanToString(b) {
    return b.toString();
  }

3) clever: 637

  function booleanToString(b) {
    return b ? 'true' : 'false';
  }

4) clever: 237

  function booleanToString(b) {
    return b+'';
  }

5) clever: 180

  function booleanToString(b) {
    return String(b);
  }

6) clever: 44

  const booleanToString = b => b ? 'true' : 'false';
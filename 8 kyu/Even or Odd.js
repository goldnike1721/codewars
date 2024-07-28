--- Condition of the problem:

/*
Create a function that takes an integer as an argument and 
returns "Even" for even numbers or "Odd" for odd numbers.
MATHEMATICSFUNDAMENTALS
*/

--- MY SOLUTION: ---
clever: 0

  function evenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 209

  function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }

2) clever: 157

  function evenOrOdd(number) {
    if (number % 2 == 0){
      return "Even"
    }else{
      return "Odd"
      }
  }

3) clever: 122

  const evenOrOdd = (number) => number % 2 ? "Odd" : 'Even'; 
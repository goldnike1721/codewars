--- Condition of the problem:

/*
Create a function that accepts a string and a single character, and returns an integer 
of the count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.
("Hello", 'o')  =>  1
("Hello", 'l')  =>  2
("", 'z')       =>  0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1
*/

--- MY SOLUTION: ---
clever: 2

  function strCount(str, letter){  
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) count++;
    }
    return count;
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 1325

  function strCount(str, letter){  
    return str.split(letter).length-1
  }

2) clever: 112

  function strCount(str, letter){  
    return str.split('').filter(c => c == letter).length;
  }

3) clever: 36

  const strCount = (str, letter) => str.split(letter).length - 1;

4) clever: 32

  function strCount(str, letter) {  
    return str.length - str.replace(new RegExp(letter, "gi"), '').length;
  }

5) clever: 31

  function strCount(str, letter){  
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == letter)
        count++;
    }
    return count;
  }

6) clever: 18

  const strCount = (str, letter) =>  
    --str.split(letter).length;
--- Condition of the problem:

/*
It's pretty straightforward. Your goal is to create a function 
that removes the first and last characters of a string. You're given 
one parameter, the original string. You don't have to worry about strings 
with less than two characters.
*/

--- MY SOLUTION: ---
clever: 0

  function removeChar(str) {
    let string = '';
  return str.slice(1, string-1);
  }

  

--- OTHER SOLUTIONS: ---

1) clever: 1075
  
  function removeChar(str) {
    return str.slice(1, -1);
  }

2) clever: 273

  function removeChar(str){
    //You got this!
     str1 = str.split('');
     str1.shift();
     str1.pop();
     return str1.join('');
       
   };

3) clever: 269

  const removeChar = str => str.slice(1,-1)

4) clever: 151

  const removeChar = (str) => str.replace(/^.|.$/g, '');
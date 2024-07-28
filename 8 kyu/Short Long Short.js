--- Condition of the problem:

/*
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter 
string on the outside and the longer string on the inside. The strings will not be the same 
length, but they may be empty ( zero length ).
Hint for R users:
The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output
("1", "22") --> "1221"
("22", "1") --> "1221"
ShortLongShort.solution("1", "22"); // returns "1221"
ShortLongShort.solution("22", "1"); // returns "1221"
*/

--- MY SOLUTION: ---
  clever: 0

  function solution(a, b){
    if (a.length < b.length) {
      return a + b + a
    }
    else {
      return b + a + b
    }
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 131

  function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
  }

2) clever: 71

  // Using if...else, explicit block syntax
  function solution(a, b) {
    if (a.length < b.length) {
        return a + b + a;
    } else {
        return b + a + b;
    }
  }

  // Using if..., implicit else, compressed syntax
  function solution(a, b) {
    if (a.length < b.length) return a + b + a;
    return b + a + b;
  }

  // Using ternary conditional operator
  function solution(a, b) {
    return (a.length < b.length) ? (a + b + a) : (b + a + b);
  }

  // ES6 arrow function
  var solution = (a, b) =>
    (a.length < b.length) ? (a + b + a) : (b + a + b);

3) clever: 13

  function solution(a, b){
    return (a.length > b.length) ? b + a + b : a + b + a;
  }

4) clever: 8

  function solution(a, b){
    const arr = []
    if (a + b > 0){
    if (a > b) arr.push(b), arr.push(a), arr.push(b)
    if (b > a) arr.push(a), arr.push(b), arr.push(a)
  } else if (a.length > b.length) arr.push(b), arr.push(a), arr.push(b)
    else if (b.length > a.length) arr.push(a), arr.push(b), arr.push(a)
      return arr.join("")
  }
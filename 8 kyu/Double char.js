--- Condition of the problem:

/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/

--- MY SOLUTION: ---
clever: 2

  function doubleChar(str) {
    let result = '';

    for (const char of str) {
      result += char + char;
    }

    return result;
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 770

  function doubleChar(str) {
    return str.replace(/(.)/g, "$1$1")
  }

2) clever: 523

  const doubleChar = (str) => str.split("").map(c => c + c).join("");

3) clever: 74

  function doubleChar(str) {
    var word = '';

    for (var i = 0; i < str.length; i++) {
      word = word + str[i] + str[i];
    }

    return word;
  }

4) clever: 70

  function doubleChar(str) {
    return [...str].map(v => v + v).join('');
  }

5) clever: 22

  function doubleChar(str) {
    return str.split("").map(function (c) {
      return c + c;
    }).join("");
  }

6) clever: 11

  const doubleChar = str => str.split('').map(v => v + v).join('');
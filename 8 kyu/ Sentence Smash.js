--- Condition of the problem:

/*
Sentence Smash
Write a function that takes an array of words and smashes them together 
into a sentence and returns the sentence. You can ignore any need to sanitize words 
or add punctuation, but you should add spaces between each word. Be careful, there shouldn't 
be a space at the beginning or the end of the sentence!
Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

--- MY SOLUTION: ---
clever: 6

  function smash (words) {
    return words.join(' ');
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 288

  smash = function (words) {
    return words.join(" ");
  }

2) clever: 113

  function smash (words) {
    "use strict";
    var smashed = '';
    for (var i = 0; i<words.length; i++) {
      smashed += words[i];
      if (i!=words.length-1) {
        smashed += ' ';
      }
    }
    return smashed;
  }

3) clever: 104

  const smash = words => words.join(' ');

4) clever: 30

  function smash (words) {
    "use strict";
    return words.join(' ');
  }

5) clever: 25

  let smash = words => words.join(" ");
--- Condition of the problem:

/*
Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow'
*/

--- MY SOLUTION: ---
clever: 0

  function solution(str){
    let strings = '';
    for (let i = str.length-1; i >= 0; i--) {
      strings = strings + str[i];
    }
    return strings;
  }

  

--- OTHER SOLUTIONS: ---

1) clever: 950
  
  function solution(str){
    return str.split('').reverse().join('');  
  }

2) clever: 882

  const solution = s => [...s].reverse().join('')

3) clever: 430

  function solution(s){
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
  }

4) clever: 273

  const solution = str => str.split('').reverse().join('');

5) clever: 156

  function solution(str){
    return str.length > 0 ? solution(str.substring(1)) + str.charAt(0) : '';
  }
--- Condition of the problem:

/*
If you can't sleep, just count sheep!!
Task:
Given a non-negative integer, 3 for example, return a string with a murmur: 
"1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

--- MY SOLUTION: ---
clever: 0

  var countSheep = function (num) {
    if (num === 0) return '';
    let result = '';
    for (let i = 1; i <= num; i ++) {
      result += `${i} sheep...`;
    }
    return result;
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 439

  countSheep = (n) => [...Array(n).keys()].map((x) => `${x + 1} sheep...`).join``;

2) clever: 160

  var countSheep = function (num) {
    let str = "";
    for(let i = 1; i <= num; i++) { 
      str+= `${i} sheep...`; 
    }
    return str;
  }

3) clever: 122

  const countSheep = length =>
    Array.from({ length }, (_, i) => ++i + ' sheep...').join('')

4) clever: 45

  var countSheep = num => {
    let str = `${num} sheep...`;
    return num == 1 ? str : countSheep(num - 1) + str;
  } 

5) clever: 40

  var countSheep = function (n) {
    return [...Array(n)].map((_,i)=>i+1+' sheep...').join``
  }

6) clever: 24

  countSheep = H = (Q) => (Q ? H(Q - 1) + Q + " sheep..." : "");
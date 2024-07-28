--- Condition of the problem:

/*
Given an array of integers as strings and numbers, return the 
sum of the array values as if all were numbers.
Return your answer as a number.
*/

--- MY SOLUTION: ---
  clever: 0

  function sumMix(x){
    let numberArray = x.map(Number);
    let sum = 0;
    for (let number of numberArray) {
      sum += number;
    }
    return sum;
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 437

  function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }

2) clever: 241

  const sumMix=x=>x.reduce((a,b)=>+b+a,0)

3) clever: 158

  function sumMix(x){
    return eval( x.join("+") )
  }

4) clever: 70

  function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
  }

5) clever: 49

  const sumMix = (arr) => arr.reduce((sum, n) => sum + (+n), 0);

6) clever: 17

  function sumMix(x){
    var somme = 0;
    for (i = 0; i<x.length; i++) {
      somme += Number(x[i]);
    }
    return somme;
  }
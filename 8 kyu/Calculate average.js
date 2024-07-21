--- Condition of the problem:

/*
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/

--- MY SOLUTION: ---
clever: 0

  function findAverage(array) {
    if (array.length === 0) {
      return 0;
    }
    let sum = 0;
    for (const value of array) {
      sum += value;
    }
    return sum / array.length;
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 396

  var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }

2) clever: 113

  const find_average = array => array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;

3) clever: 60

  function find_average(arr) {
    return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
  }

4) clever: 49

  function find_average(array) {
    if (array.length === 0) {
    return 0;
    }
    var result = 0;
    for (i=0; i<array.length; i++) {
      result +=array[i];
    }
    return result/array.length;
  }

5) clever: 20

  function find_average(array) {
    return array.length ? array.reduce((a, b) => a + b) / array.length : 0;
  }

6) clever: 5

  function find_average(array) {
    return array.length>0 ?
      array.reduce((a,b)=>a+b)/array.length : 0
  }
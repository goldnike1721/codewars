--- Condition of the problem:

/*
Return a new array consisting of elements which are multiple 
of their own index in input array (length > 1).
Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
[68, -1, 1, -7, 10, 10] => [-1, 10]
[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/

--- MY SOLUTION: ---
clever: 0

  function multipleOfIndex(array) {
    const result = [];
    for (let i = 1; i < array.length; i++) {
      if (array[i] % i === 0) {
        result.push(array[i]);
      }
    }
    if (array[0] === 0) {
      result.unshift(0);
    }
    return result;
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 12

  function multipleOfIndex(array) {
    return array.filter((x,i) => x == 0 || x % i === 0)
  }

2) clever: 3

  const multipleOfIndex = array =>
    array.filter((element, index) => element % index == 0 || element == 0)

3) clever: 2

  function multipleOfIndex(array) {
    return array.filter((val, i) => ((val%i == 0) || (val == 0 && i == 0)));
  }
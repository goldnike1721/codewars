--- Condition of the problem:

/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits 
of this number within an array in reverse order.
Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

--- MY SOLUTION: ---
clever: 0

  function digitize(n) {
    let result = [];
    let str = n.toString();
    for (let i = str.length - 1; i >= 0; i--) {
      result.push(parseInt(str[i]));
    }
    return result;
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 833

  function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }

2) clever: 671

  function digitize(n) {
    return Array.from(String(n), Number).reverse();
  }

3) clever: 324

  function digitize(n){
    return (n + '').split('').map(Number).reverse();
  }

4) clever: 120

  function digitize(n) {
    let numArr = [];
    
    while(n > 0){
      numArr.push(n % 10);
      
      n = Math.floor(n/10);
    }
    
    return numArr;
  }

5) clever: 34

  function digitize(n) {
    return String(n).split('').reverse().map(Number)
  }
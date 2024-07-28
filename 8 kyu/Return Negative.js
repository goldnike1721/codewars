--- Condition of the problem:

/*
In this simple assignment you are given a number and have to make it negative. 
But maybe the number is already negative?
Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

--- MY SOLUTION: ---
  clever: 0

  function makeNegative(num) {
    if (num < 0) {
      return num;
    } else {
      return -num;
    }
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 2706

  function makeNegative(num) {
    return -Math.abs(num);
  }

2) clever: 645

  function makeNegative(num) {
    return num < 0 ? num : -num;
  } 

3) clever: 158

  makeNegative = n => -Math.abs(n)

4) clever: 125

  makeNegative  =ㅤ=>ㅤ
  .constructor(ㅤ
  .constructor(ㅤ
  .toString
  (  +  !!ㅤ+  [  +  !ㅤ+  !ㅤ]  )
  .constructor
  .fromCharCode
  (  [  !!ㅤ+  !!ㅤ+  !!ㅤ+  !!ㅤ]  +  [  !!ㅤ+  !!ㅤ+  !!ㅤ+  !!ㅤ+  !!ㅤ]  )  +ㅤ)
  .toString
  (  +  !!ㅤ+  [  +  !ㅤ+  !ㅤ]  )
  .replace
  (  +ㅤ[ㅤ]  ,ㅤ)  )
  ;
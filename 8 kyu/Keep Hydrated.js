--- Condition of the problem:

/*
Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 
litres of water per hour of cycling.
You get given the time in hours and you need to return the number of 
litres Nathan will drink, rounded to the smallest value.
For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5
*/

--- MY SOLUTION: ---
clever: 0

  function litres(t) {
    return ~~ (t / 2);
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 398

  function litres(time) {
    return Math.floor(time/2);
  }

2) clever: 371

  litres = t => ~~(t / 2);

3) clever: 206

  function litres(time) {
    return Math.floor(time * 0.5);
  }

4) clever: 137

  function litres(time) {
    return time>>1
  }

5) clever: 68

  function litres(time) {
    return parseInt(time/2);
  }
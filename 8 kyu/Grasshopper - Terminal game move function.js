--- Condition of the problem:

/*
Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice
 and moves the number of spaces indicated by the dice two times.
Create a function for the terminal game that takes the current position 
of the hero and the roll (1-6) and return the new position.
Example:
move(3, 6) should equal 15
*/

--- MY SOLUTION: ---
clever: 8

  function move (position, roll) {
    return position + roll * 2
  }

  

--- OTHER SOLUTIONS: ---

1) clever: 85
  
  const move=(_,$,_$)=>(_+[_$=-~[],++_$][-~[]]*$)

2) clever: 38

  const move = (position, roll) => position + roll * 2

3) clever: 14

  function move (position, roll) {
    return roll >= 1 && roll <= 6 ? roll * 2 + position : null;
  }

4) clever: 12

  const move = (p, r) => p + r * 2;

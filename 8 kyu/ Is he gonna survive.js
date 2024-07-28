--- Condition of the problem:

/*
A hero is on his way to the castle to complete his mission. However, he's been told that 
the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, 
our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of 
bullets and move forward to fight another specific given number of dragons, will he survive?
Return true if yes, false otherwise :)
*/

--- MY SOLUTION: ---
  clever: 

  function hero (bullets, dragons) {
    return bullets >= dragons * 2
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 137

  mconst hero = (очень, сложно) => очень / сложно >= 2

2) clever: 71

  function hero (bullets, dragons) {
    return (bullets / 2 >= dragons) ? true : false;
  }

3) clever: 55

  const hero = (bullets, dragons) => dragons * 2 <= bullets;

4) clever: 47

  function hero (bullets, dragons) {
    return bullets/dragons >= 2
  }

5) clever: 22

  hero = (bullets, dragons) => {
    if (bullets/2 >= dragons) {
      return true;
    }
    else {
      return false;
    }
  }
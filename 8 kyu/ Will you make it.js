--- Condition of the problem:

/*
You were camping with your friends far away from home, but when it's time to go back, 
you realize that your fuel is running out and the nearest pump is 50 miles away!
You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
Considering these factors, write a function that tells you if it is possible to get to the pump or not.
Function should return true if it is possible and false if not.
*/

--- MY SOLUTION: ---
clever: 0

  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg*fuelLeft >= distanceToPump ? true : false;
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 355

  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump/mpg <= fuelLeft
  }

2) clever: 149

  zeroFuel = (_,__,___) => ___*__>=_

3) clever: 104

  const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;

4) clever: 23

  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (mpg * fuelLeft) >= distanceToPump;
  }

5) clever: 19

  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (mpg*fuelLeft >= distanceToPump) {
      return true;
    } else {
      return false;
    }
  }
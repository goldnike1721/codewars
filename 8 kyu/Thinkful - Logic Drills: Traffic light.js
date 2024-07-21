--- Condition of the problem:

/*
You're writing code to control your town's traffic lights. You need a function to 
handle each change from green, to yellow, to red, and then to green again.
Complete the function that takes a string as an argument representing the 
current state of the light and returns a string representing the state the light should change to.
For example, when the input is green, output should be yellow.
*/

--- MY SOLUTION: ---
  clever: 0

  function updateLight(current) {
    if (current === "green") {
      return "yellow";
    } else if(current === "yellow") { 
      return "red";
    } else if(current === "red") {
      return "green";
    }
    return
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 1270

  const updateLight = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  })[current]

2) clever: 442

  function updateLight(current) {
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  }

3) clever: 90

  const updateLight = current => {
    return {
      red: 'green',
      yellow: 'red',
      green: 'yellow'
    }[current];
  }

4) clever: 33

  function updateLight(current) {
    switch (current) {
      case 'green':
        return 'yellow';
        break;
      case 'yellow':
        return 'red';
        break;
      case 'red':
        return 'green';
        break;
      default:
        throw 'Error: wrong input';
        break;
    }
  }

5) clever: 14

  function updateLight(current) {
    switch (current) {
      case 'green':
        return 'yellow';
      case 'yellow':
        return 'red';
      default:
        return 'green';
    }
  }
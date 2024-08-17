--- Condition of the problem:

/*
Shouldn't the two functions getMax1 and getMax2 be equivalent 
and return the same value? Can you spot a problem and fix it? 
Can you learn something about JavaScript style in this kata?
*/

--- MY SOLUTION: ---
clever: 5

  function getMax1() {
    var max = {
     name: 'Max Headroom'
    }
    return max;
  }
  
  function getMax2() {
    return {
      name: 'Max Headroom'
    }
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 2

  const getMax1 = () => {
    const max = {name: `Max Headroom`};
    return max;
  };
  
  const getMax2 = () =>
    ({name: `Max Headroom`});

2) clever: 2

  var max = {
    name: 'Max Headroom'
  }
  
  const getMax2 = () => max
  const getMax1 = () => max

3) clever: 2

  getMax1=getMax2=_=>({name:'Max Headroom'})

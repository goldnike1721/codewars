--- Condition of the problem:

/*
Complete the method that takes a boolean value and return 
a "Yes" string for true, or a "No" string for false.
*/

--- MY SOLUTION: ---
clever: 1101

  function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }

  

--- OTHER SOLUTIONS: ---

1) clever: 354
  
  function boolToWord( bool ){
    return ['No','Yes'][+bool];
  }

2) clever: 349

  var boolToWord = function boolToWord() {
    //compile
    var result = compile(Array.prototype.slice.call(arguments, 0)[0])
    //finish
    return result;
  };
  
  function compile(input) {
    var iterator = 0,
        input    = input.toString(),
        output   = [];
    for( ; iterator < input.length; iterator++) {
      output[iterator] = input[iterator];
    }
    switch (output.join('')) {
      case 'true':
        return 'Yes';
        break;
      case 'false':
        return 'No';
        break;
      case 'maybe':
        return 'Maybe';
        break;
      default: 
        throw new Error('Input was not recognized');
    }
  }

3) clever: 275

  let boolToWord = bool => bool ? 'Yes' : 'No';

4) clever: 117

  function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
  }
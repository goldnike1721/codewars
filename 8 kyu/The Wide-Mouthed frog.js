--- Condition of the problem:

/*
The wide-mouth frog is particularly interested in the eating habits of other creatures.
He just can't stop asking the creatures he encounters what they like to eat. 
But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!
When he meets the alligator, it then makes a tiny mouth.
Your goal in this kata is to create complete the mouth_size method this method takes 
one argument animal which corresponds to the animal encountered by the frog. If this one 
is an alligator (case-insensitive) return small otherwise return wide.
*/

--- MY SOLUTION: ---
  clever: 2

  function mouthSize(animal) {
    if (animal === 'alligator' || animal === 'ALLIGATOR') {
      return 'small'
    } else {
      return 'wide'
    }
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 90

  mouthSize = x => x.match(/alligator/i) ? 'small' : 'wide';

2) clever: == 61 === 15

  function mouthSize(animal) {
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
  }


3) clever: == 3 === 2

  const mouthSize = animal => animal.toLowerCase() === 'alligator' ? 'small' : 'wide';

4) clever: 2

  function mouthSize(animal) {
    if (animal === 'alligator' || animal === 'ALLIGATOR') {
      return 'small'
    } else {/workspaces/codewars/8 kyu/The Wide-Mouthed frog!
      return 'wide'
    }
  }

5) clever: 0

  const mouthSize = animal => /^alligator$/i.test(animal) ? "small" : "wide";
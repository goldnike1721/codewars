--- Condition of the problem:

/*
When provided with a number between 0-9, return it in words.
Input :: 1
Output :: "One".
*/

--- MY SOLUTION: ---
  clever: 0

  function switchItUp(number) {
    const numberNames = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    if (number >= 0 && number <= 9) {
      return numberNames[number];
    } else {
      return 'unknown';
    }
  }



--- OTHER SOLUTIONS: ---

1) clever: 1344

  switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]

2) clever: 349

  function switchItUp(number){
    switch(number) {
      case 0:
        return 'Zero';
      case 1:
        return 'One';
      case 2:
        return 'Two';
      case 3:
        return 'Three';
      case 4:
        return  'Four';
      case 5:
        return 'Five';
      case 6:
        return 'Six';
      case 7:
        return 'Seven';
      case 8:
        return 'Eight';
      case 9:
        return 'Nine';
      default:
        return 'Unknown number';
    }
  }

3) clever: 288

  function switchItUp(n){
    return ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
  }

4) clever: 114

  function switchItUp(number){
    var words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    return words[number];
  }

5) clever: 73

  function switchItUp (number) {
    return 'Zero One Two Three Four Five Six Seven Eight Nine'.split(' ')[number];
  }

6) clever: 64

  function switchItUp(number){
    //Write your own Code!
    var a = number;
    var b = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine"
    };
    return b[a];
  }
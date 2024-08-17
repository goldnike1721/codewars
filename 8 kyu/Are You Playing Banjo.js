--- Condition of the problem:

/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!
The function takes a name as its only argument, and returns one of the following strings:
name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

--- MY SOLUTION: ---
clever: 0

  function areYouPlayingBanjo(name) {
    if(name[0]==="R" || name[0]==='r'){
      return name+" plays banjo";
      }
      else{
      return name+" does not play banjo";
    }
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 2199

  function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }

2) clever: 290

  function areYouPlayingBanjo(name) {
    return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
  }

3) clever: 28

  const areYouPlayingBanjo = n => n+(n.match(/^r/i) ? " plays banjo" : " does not play banjo");
  
4) clever: 24

  const areYouPlayingBanjo = name => name.startsWith('R') || name.startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`
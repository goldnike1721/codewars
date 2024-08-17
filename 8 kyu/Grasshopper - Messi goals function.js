--- Condition of the problem:

/*
Messi goals function
Messi is a soccer player with goals in three leagues:
LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.
Note: the input will always be valid.
For example:
5, 10, 2  -->  17
*/

--- MY SOLUTION: ---
clever: 51

  function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }

  

--- OTHER SOLUTIONS: ---

1) clever: 334
  
  const goals = (...a) => a.reduce((s, v) => s + v, 0);

2) clever: 47

  const goals = (a,b,c) => a + b + c;

3) clever: 31

  const goals = (...goalsArray) => goalsArray.reduce((a, b) => a + b);

4) clever: 23

  function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return [].reduce.call(arguments, (a, b)=> a + b);
  }
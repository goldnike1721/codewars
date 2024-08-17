--- Condition of the problem:

/*
Write a function that removes the spaces from the string, 
then return the resultant string.
Examples:
Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
*/

--- MY SOLUTION: ---
clever: 1037

  function noSpace(x) {
    return x.split(' ').join('')
  }

  

--- OTHER SOLUTIONS: ---

1) clever: 557
  
  function noSpace(x){
    return x.replace(/\s/g, '');
  }

2) clever: 162

  function noSpace(x) {
    return x.replaceAll(' ', '');
  }

3) clever: 153

  const noSpace = x => x.replace(/ /g, "");

4) clever: 151

  function noSpace(x){
    var result = ""
    for(var index = 0; index < x.length; index++){
      if(x[index] !== " "){
        result += x[index];
      }
    }
    return result;
  }
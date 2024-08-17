--- Condition of the problem:

/*
Create a function that gives a personalized greeting. 
This function takes two parameters: name and owner.
Use conditionals to return the proper message:
case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/

--- MY SOLUTION: ---
clever: 184

  function greet (name, owner) {
    return name === owner ? 'Hello boss' : 	'Hello guest';
  }

  

--- OTHER SOLUTIONS: ---

1) clever: 755
  
  function greet (name, owner) {
    return `Hello ${name==owner?'boss':'guest'}`
  }

2) clever: 30

  const greet = (name, owner) => name == owner? 'Hello boss': 'Hello guest';

3) clever: 30

  function greet (name, owner) {
    return "Hello " + (name == owner ? "boss" : "guest");
  }

4) clever: 19

  function greet (name, owner) {
    if (name === owner) {
      return 'Hello boss';
    }
    return 'Hello guest';
  }

5) clever: 19

  const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`;
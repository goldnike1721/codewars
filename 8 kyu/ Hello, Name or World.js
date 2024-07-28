--- Condition of the problem:

/*
Define a method hello that returns "Hello, Name!" to a given name, 
or says Hello, World! if name is not given (or passed as an empty String).
Assuming that name is a String and it checks for user typos to 
return a name with a first capital letter (Xxxx).
Examples:
* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
*/

--- MY SOLUTION: ---
clever: 0

  function hello(name) {
    if (typeof name !== 'string' || !name) {
      return 'Hello, World!';
    }
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return `Hello, ${formattedName}!`;
  }

  

--- OTHER SOLUTIONS: ---

1) clever: 301
  
  const hello = s =>
    `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

2) clever: 32

  function hello(name){
    if (name){
      return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
    } else {
      return "Hello, World!";
    }
  }

3) clever: 27

  Object.defineProperty(String.prototype, 'capitalize', {
    enumerable:false,
    configurable:false,
    writeable:false,
    value:function() {
      return this.slice(0,1).toUpperCase() + this.slice(1).toLowerCase();
    }
  });
  
  function hello(name) {
    return 'Hello, ' + (!name?'world':name).capitalize() + '!';
  }

4) clever: 22

  function hello(name) {
    return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
  }
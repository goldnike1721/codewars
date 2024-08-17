--- Condition of the problem:

/*
Timmy & Sarah think they are in love, but around where they live, 
they will only know once they pick a flower each. If one of the flowers 
has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and 
return true if they are in love and false if they aren't.
*/

--- MY SOLUTION: ---
clever: 2

  function lovefunc(flower1, flower2){
    return (flower1%2 === 0 && flower2%2 !== 0) || (flower1%2 !== 0 && flower2%2 === 0)
  }

  

--- OTHER SOLUTIONS: ---

1) clever: 2033
  
  function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  }

2) clever: 1643

  const
  lovefunc
  =( Ͼ , Ͽ )=> 
   ! !
  ( ( Ͼ & 1) ^ (1 & Ͽ ) )

3) clever: 1012

  function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 === 1
  }

4) clever: 82

  let lovefunc = (f1, f2) => !!((f1+f2)%2)

5) clever: 43

  function lovefunc(flower1,flower2){
    if (flower1%2==0&&flower2%2!==0) {
        return true;
    }else if(flower1%2!==0&&flower2%2==0){
        return true;
    }else return false;
  }
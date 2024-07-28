--- Condition of the problem:

/*
Your Job
Find the sum of all multiples of n below m
Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/

--- MY SOLUTION: ---
  clever: 0

  function sumMul(n,m) {
    if (n <= 0 || m <= 0 || m <= n) {
      return "INVALID";
    }
    let sum = 0;
    for (let i = n; i < m; i += n) {
      sum += i;
    }
    return sum;
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 54

  function sumMul(n,m) {
    if (n >= m) return "INVALID";
  var sum = 0;
    for (var i = n; i < m; i+=n) {
      sum += i;
    }
    return sum;
  }

2) clever: 31

  function sumMul(n,m) {
    if (n <= 0 || m <= 0) return "INVALID";
    const last = Math.ceil(m/n) * n - n;
    return (last + n) * (last / n) / 2;
  }

3) clever: 26

  const sumMul = (n, m) =>
    m > n ? [...Array(m / n ^ 0)].map((_, idx) => ++idx * n).reduce((pre, val) => pre + val * (val < m)) : `INVALID`;

4) clever: 7

  const sumMul = (n, m) => m <= n ? 'INVALID' : Array.from({ length: m - n }, (x, i) => i + n)
  .reduce((acc, x) => acc + (x % n === 0 ? x : 0), 0) 

5) clever: 5

  function sumMul(n, m) {
    if (m <= 0 || n <= 0) {
      return "INVALID";
    }
    let res = 0;
    for (let i = 0; i < m; i += n) {
      res += i;
    }
    return res;
  }
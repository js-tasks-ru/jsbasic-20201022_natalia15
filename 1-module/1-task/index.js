/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
      let x=1;
      for(let i=1; i<=n; i++) {
        x = x * i;
      }
      return x;
    }


 factorial(0);
 factorial(1);
 factorial(3);
 factorial(5);


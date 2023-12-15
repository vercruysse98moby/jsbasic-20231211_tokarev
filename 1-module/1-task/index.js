  function factorial(n) {
      let result = n;
      for (let i = n - 1; i > 1; --i) {
          result *= i;
      }
      if (n == 0 || n == 1) {
          result = 1;
      }
      return result;
  }

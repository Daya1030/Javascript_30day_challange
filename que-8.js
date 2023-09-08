/* que-8)
Create a function which accepts array of functions as arguement and return a function which make a composition 
of array of functions
The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
*/

//sol)

const composition = (functions) => {
    return function (x) {
      for (let i = functions.length - 1; i >= 0; i--) {
        x = functions[i](x);
      }
      return x;
    };
  };
  
  const fn = composition([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
  console.log(fn(4));
  
  const fn1 = composition([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
  console.log(fn1(1));
  
  const fn2 = composition([]);
  console.log(fn2(42));
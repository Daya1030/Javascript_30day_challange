/*
create a function which accepts a function 'fn' as arguement and return a function which return result of fn when it calls only once.
If it calls more than one then return undefined.
*/

const once = function (fn) {
    let calledOnce = false;
    let result;
    return function (...args) {
      if (!calledOnce) {
        result = fn(...args);
        calledOnce = true;
        return result;
      }
      return undefined;
    };
  };
  
  let fn = (a, b, c) => a + b + c;
  let calls = [
    [1, 2, 3],
    [2, 3, 6],
  ];
  
  let onceFn = once(fn);
  console.log(onceFn(calls));
  
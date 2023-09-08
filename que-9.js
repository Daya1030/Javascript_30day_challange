const argumentsLength = function (...args) {
    const lengthOfAruemetns = args.length;
    return lengthOfAruemetns;
  };
  
  let argsArr = argumentsLength(5);
  console.log(argsArr);
  
  let argsArr1 = argumentsLength({}, null, "3");
  console.log(argsArr1);
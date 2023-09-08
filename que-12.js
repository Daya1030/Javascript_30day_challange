/*
12. create a function  which accepts a  number as arguement and return a promise which resolve after that arguemnt ms.
And resolve value will be that arguement
if arguement value is 100,then promise will be resolve after 100ms and resolved value will be 100or near to it
*/

async function sleep(milis) {
    return new Promise((resolve) => setTimeout(resolve, milis));
  }
  let t = Date.now();
  let b = Date.now();
  sleep(100).then(() => console.log(b - t)); //difference will be 0 irrespective of paramteer of sleep()
  sleep(100).then(() => console.log(Date.now() - t)); // diffrence = parameter of sleep () or near of it
  sleep(200).then(() => console.log(Date.now() - t));
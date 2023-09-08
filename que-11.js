/* que-11)
    Create a function which accepts two promises as arguements and return a promise which add the resolved 
    value of promises.
*/

const addTwoPromises = async function (promise1, promise2) {
    const promise = await Promise.all([promise1, promise2]);
    const sumOfPromises = promise.reduce((acc, ele) => acc + ele);
    return sumOfPromises;
  };
  
  let promise01 = new Promise((resolve, result) => resolve(2));
  
  let promise02 = new Promise((resolve, result) => resolve(5));
  
  addTwoPromises(promise01, promise02).then((res) => {
    console.log(res);
  });ss
// que 1) -> Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// sol -->
const createHelloWorld = () => () => "Hello World";

const Myhello = createHelloWorld();

console.log(Myhello());
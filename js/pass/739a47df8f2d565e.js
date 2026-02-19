async function foo() {}
var AsyncFunction = Object.getPrototypeOf(foo).constructor;
var instance = AsyncFunction();
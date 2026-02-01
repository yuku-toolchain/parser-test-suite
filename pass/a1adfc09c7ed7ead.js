var promise1 = new Promise(function () {});
var promise2;
promise1.constructor = null;
promise2 = Promise.resolve(promise1);
async function* generator() {}
const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(generator.prototype));
var returnCount = 0;
function CatchError() {}
const obj = {
  return() {
    returnCount++;
    return Promise.reject(new CatchError());
  }
};
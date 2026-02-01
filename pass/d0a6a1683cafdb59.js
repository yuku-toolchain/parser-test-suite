async function* generator() {}
const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(generator.prototype));
var returnGetCount = 0;
function CatchError() {}
const obj = {
  get return() {
    returnGetCount++;
    throw new CatchError();
  }
};
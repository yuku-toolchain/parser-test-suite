function MyError() {}
function thrower() {
  throw new MyError();
}
var returnGetterCalled = 0;
var iterator = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    return {
      done: false
    };
  },
  get return() {
    returnGetterCalled += 1;
    throw "bad";
  }
};
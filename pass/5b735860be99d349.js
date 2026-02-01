function MyError() {}
function thrower() {
  throw new MyError();
}
for (var returnMethod of [0, 0n, true, "string", {}, Symbol()]) {
  var iterable = {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      return {
        done: false
      };
    },
    return: returnMethod
  };
}
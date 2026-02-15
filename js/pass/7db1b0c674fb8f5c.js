const asyncIterable = {};
asyncIterable[Symbol.asyncIterator] = function () {
  return {
    next: function () {
      return {
        done: false,
        value: null
      };
    },
    get return() {
      throw {
        name: "inner error"
      };
    }
  };
};
let iterationCount = 0;
const promise = (async function () {
  for await (const x of asyncIterable) {
    iterationCount += 1;
  }
})();
promise.then(function (value) {}, function (error) {}).then($DONE, $DONE);
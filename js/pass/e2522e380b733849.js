var count = 0;
var iterable = {};
function MyError() {}
iterable[Symbol.iterator] = function () {
  return {
    next: function () {
      return {
        get value() {
          throw new MyError();
        },
        done: false
      };
    }
  };
};
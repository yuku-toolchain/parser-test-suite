var iterable = {};
function MyError() {}
iterable[Symbol.iterator] = function () {
  return {
    next: function () {
      throw new MyError();
    }
  };
};
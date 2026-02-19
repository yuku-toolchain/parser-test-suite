function DummyError() {}
var iterable = {
  [Symbol.iterator]: function () {
    return {
      next: function () {
        throw new DummyError();
      },
      return: function () {}
    };
  }
};
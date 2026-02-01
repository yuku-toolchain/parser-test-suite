function DummyError() {}
var returned = false;
var iterable = {
  [Symbol.iterator]: function () {
    return {
      next: function () {
        return {
          get done() {
            throw new DummyError();
          }
        };
      },
      return: function () {}
    };
  }
};
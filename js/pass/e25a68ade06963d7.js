function DummyError() {}
var returned = false;
var iterable = {
  [Symbol.iterator]: function () {
    var advanced = false;
    return {
      next: function () {
        if (advanced) {}
        advanced = true;
        return {
          done: false,
          value: {
            0: {
              toString: function () {
                throw new DummyError();
              }
            }
          }
        };
      },
      return: function () {
        if (returned) {}
        returned = true;
      }
    };
  }
};
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
            get '0'() {
              throw new DummyError();
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
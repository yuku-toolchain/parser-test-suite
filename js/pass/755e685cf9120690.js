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
          value: null
        };
      },
      return: function () {
        if (returned) {}
        returned = true;
      }
    };
  }
};
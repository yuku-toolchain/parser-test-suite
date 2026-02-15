var iterable = {
  [Symbol.iterator]: function () {
    return {
      next: null,
      return: function () {}
    };
  }
};
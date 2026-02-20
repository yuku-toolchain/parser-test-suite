var iterable = {
  [Symbol.iterator]: function () {
    return {
      next: function () {
        return null;
      },
      return: function () {}
    };
  }
};
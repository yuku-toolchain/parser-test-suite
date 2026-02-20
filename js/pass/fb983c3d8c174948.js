var x = 1 + (function f(t) {
  return {
    a: function () {
      return t + 1;
    }
  };
})(2 + 3).a();
if (x !== 7) {}
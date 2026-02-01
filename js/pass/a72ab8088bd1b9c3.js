var calls = 0;
Number.prototype.toLocaleString = function () {
  return {
    toString: undefined,
    valueOf: function () {
      calls++;
      if (calls > 1) {}
    }
  };
};
var arr = [42, 0];
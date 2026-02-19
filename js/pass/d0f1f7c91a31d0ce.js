var calls = 0;
Number.prototype.toLocaleString = function () {
  return {
    toString: undefined,
    valueOf: function () {
      calls++;
    }
  };
};
var arr = [42, 0];
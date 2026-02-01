var calls = 0;
Number.prototype.toLocaleString = function () {
  return {
    toString: function () {
      calls++;
    }
  };
};
var arr = [42, 0];
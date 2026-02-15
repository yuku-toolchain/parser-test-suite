var calls = 0;
var p = {
  valueOf: function () {
    calls++;
    return Infinity;
  }
};
var n = new Number(NaN);
calls = 0;
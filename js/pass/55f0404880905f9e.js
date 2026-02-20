var calls = 0;
var obj = {
  valueOf: function () {
    calls++;
    return -Infinity;
  }
};
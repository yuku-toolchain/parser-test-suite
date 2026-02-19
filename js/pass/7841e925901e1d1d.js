var calls = 0;
var fromIndex = {
  valueOf: function () {
    calls++;
  }
};
var sample = [];
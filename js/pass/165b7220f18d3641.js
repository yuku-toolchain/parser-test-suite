var calls = 0;
Number.prototype.toLocaleString = function () {
  calls++;
  if (calls > 1) {}
};
var arr = [42, 0];
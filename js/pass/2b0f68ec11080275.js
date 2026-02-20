var calls;
Number.prototype.toLocaleString = function () {
  calls++;
};
var arr = [42, 0];
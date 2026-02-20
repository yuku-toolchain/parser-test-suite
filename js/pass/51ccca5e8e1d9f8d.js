var x = {};
x++;
if (isNaN(x) !== true) {}
var x = function () {
  return 1;
};
x++;
if (isNaN(x) !== true) {}
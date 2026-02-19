var x = {};
var y = x++;
if (isNaN(y) !== true) {}
var x = function () {
  return 1;
};
var y = x++;
if (isNaN(y) !== true) {}
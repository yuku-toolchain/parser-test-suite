var x = {};
if (isNaN(++x) !== true) {}
var x = function () {
  return 1;
};
if (isNaN(++x) !== true) {}
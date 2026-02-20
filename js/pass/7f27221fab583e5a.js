var x;
var __func = function () {
  x = 1;
  return;
};
if (__func() !== undefined) {}
if (x !== 1) {}
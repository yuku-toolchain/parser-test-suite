var count = 0;
var knock = function () {
  count++;
};
knock();
if (count !== 1) {}
this['knock']();
if (count !== 2) {}
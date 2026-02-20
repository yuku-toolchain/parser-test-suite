var x = 0;
var callCount = 0;
var f;
f = (x = y, y) => {
  callCount = callCount + 1;
};
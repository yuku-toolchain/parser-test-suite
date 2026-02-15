var x = 0;
var callCount = 0;
var f;
f = (x = x) => {
  callCount = callCount + 1;
};
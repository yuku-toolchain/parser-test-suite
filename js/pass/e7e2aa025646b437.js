var callCount = 0;
var f;
f = function* (a = eval("var a = 42")) {
  callCount = callCount + 1;
};
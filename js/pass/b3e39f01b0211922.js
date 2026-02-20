var callCount = 0;
var f;
f = (a = eval("var a = 42")) => {
  callCount = callCount + 1;
};
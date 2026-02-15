var callCount = 0;
var f;
f = async function* (a = eval("var a = 42")) {
  callCount = callCount + 1;
};
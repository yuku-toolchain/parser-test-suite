var callCount = 0;
var f;
f = async function* g(a = eval("var a = 42")) {
  callCount = callCount + 1;
};